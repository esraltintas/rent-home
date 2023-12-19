import React from "react";
import { ProgressStepProps } from "@/types/types";

const ProgressStep: React.FC<
  ProgressStepProps & { completedSteps: number[] }
> = ({ currentStep, totalSteps, completedSteps }) => {
  return (
    <div className="flex items-center mt-6 mb-6">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`flex items-center ${
            currentStep === index + 1 ? "text-blue-500" : "text-gray-300"
          }`}
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

export default ProgressStep;
