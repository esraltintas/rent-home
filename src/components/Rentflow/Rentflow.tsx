import React, { useState } from "react";
import { RentflowProps } from "@/types/types";
import EmailStep from "./EmailStep";

const Rentflow: React.FC<RentflowProps> = ({ productId }) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, updateData] = useState({
    email: "",
    phone: 0,
    name: "",
    surname: "",
    href: `/rented?productId=${productId}`,
  });
  const getStepCallback =
    (nextStep: string) =>
    (fields: { name: string; surname: string } | string, value?: any) => {
      if (typeof fields === "string") {
        updateData({ ...collectedData, [fields]: value });
        setStep(nextStep);
      } else {
        updateData({ ...collectedData, ...fields });
        setStep(nextStep);
      }
    };
  return (
    <div className="flex flex-col items-center mt-20">
      <h4 className="mb-6 text-2xl">Rent Home</h4>
      <div className="flex justify-center w-60">
        {currentStep === "email" && <EmailStep cb={() => {}} />}
      </div>
    </div>
  );
};

export default Rentflow;
