"use client";
import React, { useState, useEffect, useRef, FC, useCallback } from "react";
import clsx from "clsx";
import Caret from "./Caret";

interface AutoTextProps {
  textArray: string[];
  speed: number;
  delay: number;
  className?: string;
  stopAfterFirst?: boolean;
  controlled?: boolean;
  typingEffect?: "default" | "fade-in";
  newLineEnabled?: boolean;
  startOnView?: boolean; // New prop to control start on viewport
}

/**
 * AutoText component for creating typing effects.
 * @param {Object} props - Component props.
 * @param {string[]} props.textArray - Array of strings to be displayed sequentially.
 * @param {number} props.speed - Typing speed in milliseconds.
 * @param {number} props.delay - Delay before typing starts.
 * @param {string} [props.className=""] - Additional CSS class.
 * @param {boolean} [props.stopAfterFirst=false] - Whether to stop after typing each string once.
 * @param {boolean} [props.controlled=false] - Whether typing is controlled externally.
 * @param {string} [props.typingEffect="default"] - Typing effect style.
 * @param {boolean} [props.newLineEnabled=true] - Whether to enable new line after each string.
 * @param {boolean} [props.startOnView=false] - Whether typing starts when component enters viewport.
 */
const AutoText: FC<AutoTextProps> = ({
  textArray,
  speed,
  delay,
  className = "",
  stopAfterFirst = false,
  controlled = false,
  typingEffect = "default",
  newLineEnabled = true,
  startOnView = false,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingPaused, setIsTypingPaused] = useState(!startOnView);
  const [showCaret, setShowCaret] = useState(true);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const [isGatewayClosed, setIsGatewayClosed] = useState(true);
  const containerRef = useRef<HTMLSpanElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsTypingPaused(false);
      }
    },
    []
  );

  useEffect(() => {
    if (startOnView && containerRef.current) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1, // Trigger when at least 10% is visible
      });
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [startOnView, handleIntersection]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGatewayClosed && !isTypingPaused) {
        const currentText = textArray[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setIsTextFullyTyped(false);
          if (!stopAfterFirst && !isTextFullyTyped) {
            setIsTypingPaused(true);
            setTimeout(() => {
              setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % textArray.length
              );
              setDisplayText("");
              setIsTypingPaused(false);
            }, speed / 0.9);
          }
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [
    displayText,
    currentIndex,
    textArray,
    speed,
    isTypingPaused,
    stopAfterFirst,
    isTextFullyTyped,
    isGatewayClosed,
  ]);

  useEffect(() => {
    if (
      controlled &&
      currentIndex === 0 &&
      displayText.length === textArray[currentIndex].length
    ) {
      setIsTypingPaused(true);
    }
  }, [controlled, currentIndex, displayText, textArray]);

  useEffect(() => {
    setShowCaret(
      !isTypingPaused && displayText.length < textArray[currentIndex].length
    );
  }, [displayText, currentIndex, textArray, isTypingPaused]);

  useEffect(() => {
    setIsTextFullyTyped(
      !isTypingPaused && displayText === textArray[currentIndex]
    );
  }, [isTypingPaused, displayText, currentIndex, textArray]);

  useEffect(() => {
    const gatewayTimeout = setTimeout(() => {
      setIsGatewayClosed(false);
    }, delay);

    return () => clearTimeout(gatewayTimeout);
  }, [delay]);

  const handleTextClick = () => {
    if (
      !controlled &&
      currentIndex === 0 &&
      displayText.length === textArray[currentIndex].length
    ) {
      setIsTypingPaused(true);
    }
  };

  return (
    <span
      ref={containerRef} // Attach the ref here
      className={clsx("autoText text-dark-1 dark:text-light-1", className)}
      onClick={handleTextClick}
    >
      {displayText}
      {isTextFullyTyped && newLineEnabled && <br />}
      {showCaret && <Caret className="caret" />}
    </span>
  );
};

export default AutoText;
