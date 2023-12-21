import React from "react";
import { ProgressProps } from "@/types/types";

const Progress: React.FC<
  ProgressProps & {
    completedSteps: number[];
    onStepClick: (step: number) => void;
  }
> = ({ currentStep, totalSteps, completedSteps, onStepClick }) => {
  const handleClick = (step: number) => {
    if (step <= currentStep) {
      onStepClick(step);
    }
  };

  return (
    <div className="flex items-center mt-6 mb-6">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`flex items-center cursor-pointer ${
            currentStep === index + 1 ? "text-blue-500" : "text-gray-300"
          }`}
          onClick={() => handleClick(index + 1)}
        >
          <div
            className={`border-${
              completedSteps.includes(index + 1) ? "blue" : "gray"
            }-300 w-8 h-8 border rounded-full flex items-center justify-center`}
          >
            {completedSteps.includes(index + 1) ? "✓" : index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`border-${
                completedSteps.includes(index + 1) ? "blue" : "gray"
              }-200 border-solid border-r-8 border-l-8 border-t border-b `}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Progress;
