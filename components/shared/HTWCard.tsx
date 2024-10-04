import React from "react";

type Props = {
  data: {
    title: string;
    description: string;
  };
  index: number;
};

const HTWCard = ({ data, index }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-600 text-white text-3xl font-bold">
        {index}
      </div>
      <h3 className="text-xl font-bold">{data.title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{data.description}</p>
    </div>
  );
};

export default HTWCard;
