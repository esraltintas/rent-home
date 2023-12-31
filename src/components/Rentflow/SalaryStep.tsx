import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { SalaryStepProps } from "@/types/types";
import { SALARY_RANGES } from "@/utils/constants";
import { useStepStore } from "@/store/stepStore";

const SalaryStep: React.FC<SalaryStepProps> = ({ cb }) => {
  const { currentStep, setStep, completeStep, collectedData } = useStepStore();

  const [salaryRange, setSalaryRange] = useState("");

  useEffect(() => {
    setSalaryRange(collectedData.salary || "");
  }, [collectedData.salary]);

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryRange(event.target.value);
  };

  const handleNextClick = () => {
    if (salaryRange) {
      cb("salary", salaryRange);

      setStep(currentStep + 1);
      completeStep(currentStep);
    } else {
      console.error("Please select a salary range");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Salary Range:</label>

        {SALARY_RANGES.map((range) => (
          <div key={range.id}>
            <input
              type="radio"
              id={range.id}
              name="salaryRange"
              value={range.id}
              onChange={handleSalaryChange}
              checked={salaryRange === range.id}
            />
            <label htmlFor={range.id} className="p-2">
              {range.label}
            </label>
          </div>
        ))}
      </div>
      <Button
        className="bg-slate-100 hover:bg-slate-200 text-black py-1 px-3 rounded-2xl"
        onClick={handleNextClick}
      >
        Next
      </Button>
    </div>
  );
};

export default SalaryStep;
