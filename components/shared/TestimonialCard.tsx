import React from "react";

type Props = {
  testimonial: {
    name: string;
    title: string;
    image: string;
    text: string;
  };
};

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="flex flex-col bg-gray-100 p-2 items-center space-y-4 text-center">
      <img
        src={testimonial.image}
        alt="User"
        className="rounded-full"
        width={100}
        height={100}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{testimonial.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &quot;{testimonial.text}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
