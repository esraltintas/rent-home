import React, { useState } from "react";
import { RentflowProps } from "@/types/types";
import EmailStep from "./EmailStep";
import FullNameStep from "./FullNameStep";
import SummaryStep from "./SummaryStep";
import PhoneStep from "./PhoneStep";
import SalaryStep from "./SalaryStep";

const Rentflow: React.FC<RentflowProps> = ({ productId }) => {
  const [currentStep, setStep] = useState("fullname");
  const [collectedData, updateData] = useState({
    email: "",
    phone: 0,
    name: "",
    surname: "",
    salary: "",
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
        {(currentStep === "fullname" && (
          <FullNameStep cb={getStepCallback("email")} />
        )) ||
          (currentStep === "email" && (
            <EmailStep cb={getStepCallback("phone")} />
          )) ||
          (currentStep === "phone" && (
            <PhoneStep cb={getStepCallback("salary")} />
          )) ||
          (currentStep === "salary" && (
            <SalaryStep cb={getStepCallback("summary")} />
          )) ||
          (currentStep === "summary" && (
            <SummaryStep collectedData={collectedData} />
          ))}
      </div>
    </div>
  );
};

export default Rentflow;
