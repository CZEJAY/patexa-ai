"use client";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

interface RichTextProps {
  children: React.ReactNode;
  className?: string;
}

export const RichText = ({ children, className = "" }: RichTextProps) => {
  return <div className={clsx("flex flex-col space-y-4", className)}>{children}</div>;
};

interface RichTextItemProps {
  children: React.ReactNode;
  startOnView?: boolean;
  className?: string;
}

export const RichTextItem = ({ children, startOnView = false, className = "" }: RichTextItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (startOnView && itemRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.1 }
      );
      observer.observe(itemRef.current);
      return () => observer.disconnect();
    } else {
      setIsInView(true); 
    }
  }, [startOnView]);

  return (
    <div ref={itemRef} className={clsx("relative", className)}>
      {isInView ? children : null}
    </div>
  );
};

interface RichTextContentProps {
  text: string;
  speed?: number;
  delay?: number;
  effect?: "default" | "fade-in" | "slide" | "wave";
  multiLineEnabled?: boolean;
  className?: string;
}

export const RichTextContent = ({
  text,
  speed = 100,
  delay = 0,
  effect = "default",
  multiLineEnabled = false,
  className = "",
}: RichTextContentProps) => {
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const lines = multiLineEnabled ? text.split("\n") : [text];
    let lineIndex = 0;

    const typingEffect = async () => {
      setIsTyping(true);
      for (let line of lines) {
        let currentLine = "";
        for (let i = 0; i <= line.length; i++) {
          currentLine = line.slice(0, i);
          setDisplayText((prev) => [...prev.slice(0, lineIndex), currentLine]);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }
        lineIndex++;
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
      setIsTyping(false);
      setShowCaret(false); 
    };

    const typingTimeout = setTimeout(typingEffect, delay);

    return () => clearTimeout(typingTimeout);
  }, [text, speed, delay, multiLineEnabled]);

  return (
    <div
      className={clsx(
        "text-lg font-medium leading-tight whitespace-pre-wrap",
        effect === "fade-in" && "transition-opacity duration-500",
        effect === "slide" && "transform transition-transform duration-500",
        effect === "wave" && "animate-pulse",
        className
      )}
    >
      {displayText.map((line, index) => (
        <div key={index}>
            {line}
            {showCaret && <RichTextCaret />}
        </div>
      ))}
    </div>
  );
};

interface RichTextCaretProps {
  className?: string;
}

export const RichTextCaret = ({ className = "" }: RichTextCaretProps) => {
  return <span className={clsx("inline-block caret", className)}/>;
};

export const RichTextExample = () => (
  <RichText className="p-4 bg-gray-100 rounded-lg">
    <RichTextItem startOnView={true}>
      <RichTextContent
        text={"Hello, world!\nThis is the second line.\nAnd here's the third!"}
        speed={100}
        effect="fade-in"
        multiLineEnabled={true}
        className="text-blue-600"
      />
    </RichTextItem>
  </RichText>
);
