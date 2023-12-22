"use client";

import React from "react";
import Link from "next/link";
import { useStepStore } from "@/store/stepStore";

const RentLink: React.FC<{ href: string }> = ({ href }) => {
  const { setStep, updateData, completeStep, clearCompletedSteps } =
    useStepStore();

  const handleRent = () => {
    setStep(1);

    updateData({
      email: "",
      name: "",
      surname: "",
      phone: 0,
      salary: "",
      href: "",
    });
    completeStep(1);
    clearCompletedSteps();
  };

  return (
    <Link
      href={href}
      onClick={handleRent}
      className="bg-black hover:bg-slate-800 text-white py-1 px-3 rounded-2xl"
      data-testid="rent"
    >
      Rent Now
    </Link>
  );
};

export default RentLink;
