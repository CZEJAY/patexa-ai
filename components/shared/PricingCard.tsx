"use client";

import { ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  item: {
    plan: string;
    price: string;
    range?: string;
    currency?: string;
    features: string[];
  };
};

const PricingCard = ({ item }: Props) => {
  const isPro = item.plan.startsWith("Pro");
  const isEnterprise = item.plan.startsWith("Enterprise");
  return (
    <div
      className={`flex flex-col p-6 bg-white rounded-lg shadow-lg text-black ${
        isPro ? "!bg-indigo-500 !text-white" : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold text-center mb-4">{item.plan}</h3>
      <p className="text-4xl font-bold text-center mb-4">
        {isEnterprise ? "" : "$"}
        {item.price}
        <span className="text-xl font-normal">
          {isEnterprise ? "" : "/"}
          {item.range}
        </span>
      </p>
      <ul className="space-y-2 mb-6">
        {item.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <ChevronRight
              className={`${
                isPro ? "text-white mr-2" : "text-indigo-500 mr-2"
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`mt-auto ${
          isPro
            ? "bg-white text-indigo-600 hover:bg-gray-100"
            : "bg-black text-white hover:bg-black/85"
        }`}
      >
        {isEnterprise ? "Contact Sales" : "Get Started"}
      </Button>
    </div>
  );
};

export default PricingCard;
