import React, { useState, useEffect } from "react";
import { validateEmail } from "@/utils/validationUtils";
import { EmailStepProps } from "@/types/types";
import { useStepStore } from "@/store/stepStore";

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const { currentStep, setStep, completeStep, collectedData, updateData } =
    useStepStore();

  const [email, setEmail] = useState("");
  const [isValidEmail, setValidEmail] = useState(true);

  useEffect(() => {
    setEmail(collectedData.email || "");
  }, [collectedData.email]);

  const handleEmailChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(value);
    setValidEmail(validateEmail(value));
  };

  const handleNextClick = () => {
    if (email && isValidEmail) {
      props.cb("email", email);
      completeStep(currentStep);
      setStep(currentStep + 1);
      updateData({ ...collectedData, email });
    } else {
      setValidEmail(false);
      console.error("Please enter a valid email address");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Email:</label>
        <input
          type="email"
          onChange={handleEmailChange}
          value={email}
          className={`border p-1.5 ${
            !isValidEmail ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!isValidEmail && (
          <p className="text-error text-sm">
            Please enter a valid email address.
          </p>
        )}
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

export default EmailStep;
