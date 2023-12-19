import React, { useState } from "react";
import { RentflowProps } from "@/types/types";
import EmailStep from "./EmailStep";
import FullNameStep from "./FullNameStep";
import SummaryStep from "./SummaryStep";
import PhoneStep from "./PhoneStep";
import SalaryStep from "./SalaryStep";
import ProgressStep from "./ProgressStep";
import { useStepStore } from "@/store/stepStore";

const TOTAL_STEPS = 5;

const Rentflow: React.FC<RentflowProps> = ({ productId }) => {
  const { currentStep, setStep, completedSteps } = useStepStore();

  const [collectedData, updateData] = useState({
    email: "",
    phone: 0,
    name: "",
    surname: "",
    salary: "",
    href: `/rented?productId=${productId}`,
  });

  const getStepCallback = (nextStep: number) => (fields: any) => {
    updateData({ ...collectedData, ...fields });
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
