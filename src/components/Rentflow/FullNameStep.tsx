import React, { useState } from "react";
import { validateFullName } from "@/utils/validationUtils";
import { FullNameStepProps, InputFields } from "@/types/types";
import { useStepStore } from "@/store/stepStore";

const FullNameStep: React.FC<FullNameStepProps> = (props) => {
  const { currentStep, setStep, completeStep } = useStepStore();

  const [inputFields, setInputFields] = useState<InputFields>({
    name: "",
    surname: "",
  });

  const [isValid, setValid] = useState(true);

  const handleInputChange = (field: keyof InputFields, value: string) => {
    const isValidInput = /^[A-Za-z]+$/.test(value);
    setValid(isValidInput);

    setInputFields((prev) => ({
      ...prev,
      [field]: isValidInput ? value : prev[field],
    }));
  };

  const handleNextClick = () => {
    if (validateFullName(inputFields.name, inputFields.surname)) {
      setValid(true);
      setStep(currentStep + 1);
      completeStep(currentStep);
      props.cb(inputFields);
    } else {
      setValid(false);
      console.error("Please enter both name and surname.");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Name:</label>
        <input
          type="text"
          onChange={({ target: { value } }) => handleInputChange("name", value)}
          value={inputFields.name}
          className={`border p-1.5 ${
            !isValid ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label>Surname:</label>
        <input
          type="text"
          onChange={({ target: { value } }) =>
            handleInputChange("surname", value)
          }
          value={inputFields.surname}
          className={`border p-1.5 ${
            !isValid ? "border-red-500" : "border-gray-300"
          }`}
        />
      </div>
      {!isValid && (
        <p className="text-error text-sm">
          Please enter both name and surname.
        </p>
      )}
      <button
        className="bg-slate-100 hover:bg-slate-200 text-black py-1 px-3 rounded-2xl"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
};

export default FullNameStep;
