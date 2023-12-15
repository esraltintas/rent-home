import React, { useState } from "react";
import { SalaryStepProps } from "@/types/types";
import { SALARY_RANGES } from "@/utils/constants";

const SalaryStep: React.FC<SalaryStepProps> = ({ cb }) => {
  const [salaryRange, setSalaryRange] = useState("");

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryRange(event.target.value);
  };

  const handleNextClick = () => {
    if (salaryRange) {
      cb("salary", salaryRange);
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
      <button
        className="bg-slate-100 hover:bg-slate-200 text-black py-1 px-3 rounded-2xl"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default SalaryStep;
