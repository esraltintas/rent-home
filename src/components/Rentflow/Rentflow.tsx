import React from "react";
import { RentflowProps, UpdateDataType } from "@/types/types";
import EmailStep from "./EmailStep";
import FullNameStep from "./FullNameStep";
import SummaryStep from "./SummaryStep";
import PhoneStep from "./PhoneStep";
import SalaryStep from "./SalaryStep";
import ProgressStep from "./ProgressStep";
import { useStepStore } from "@/store/stepStore";

const TOTAL_STEPS = 5;

const Rentflow: React.FC<RentflowProps> = () => {
  const { currentStep, setStep, updateData, collectedData, completedSteps } =
    useStepStore();

  const getStepCallback =
    (nextStep: number) =>
    (fields: { name: string; surname: string } | string, value?: any) => {
      const newHref = "/rented?productId=";

      const updatedData: UpdateDataType =
        typeof fields === "string"
          ? {
              [fields]: value,
              href: newHref,
            }
          : {
              ...fields,
              href: newHref,
            };

      updateData(updatedData);
      setStep(nextStep);
    };

  return (
    <div className="flex flex-col items-center mt-20">
      <h4 className="mb-6 text-2xl">Rent Home</h4>
      <div className="flex flex-col justify-center w-60">
        <ProgressStep
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          completedSteps={completedSteps}
          onStepClick={(clickedStep: number) => {
            if (clickedStep <= currentStep) {
              setStep(clickedStep);
            }
          }}
        />

        {(currentStep === 1 && <FullNameStep cb={getStepCallback(2)} />) ||
          (currentStep === 2 && <EmailStep cb={getStepCallback(3)} />) ||
          (currentStep === 3 && <PhoneStep cb={getStepCallback(4)} />) ||
          (currentStep === 4 && <SalaryStep cb={getStepCallback(5)} />) ||
          (currentStep === 5 && <SummaryStep collectedData={collectedData} />)}
      </div>
    </div>
  );
};

export default Rentflow;
