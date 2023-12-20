import React, { useState, useEffect } from "react";
import { validatePhone } from "@/utils/validationUtils";
import { PhoneStepProps } from "@/types/types";
import { useStepStore } from "@/store/stepStore";

const PhoneStep: React.FC<PhoneStepProps> = (props) => {
  const { currentStep, setStep, completeStep, collectedData } = useStepStore();

  const [countryCode, setCountryCode] = useState("+49");
  const [phone, setPhone] = useState<number>(0);
  const [isValidPhone, setValidPhone] = useState(true);

  useEffect(() => {
    setPhone(collectedData.phone || 0);
  }, [collectedData.phone]);

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const sanitizedValue = inputValue.replace(/[^\d+]/g, "");

    const limitedValue = sanitizedValue.slice(0, 13);

    setPhone(parseInt(limitedValue, 10));
    setValidPhone(validatePhone(limitedValue));
  };

  const handleNextClick = () => {
    if (phone && isValidPhone) {
      props.cb("phone", phone.toString());

      setStep(currentStep + 1);
      completeStep(currentStep);
    } else {
      setValidPhone(false);
      console.error("Please enter a valid phone number");
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Phone:</label>
        <input
          type="tel"
          placeholder={countryCode}
          onChange={handlePhoneChange}
          value={phone.toString()}
          className={`border p-1.5 ${
            !isValidPhone ? "border-red-500" : "border-gray-300"
          }`}
        />
        {!isValidPhone && (
          <p className="text-rose-500 text-sm">
            Please enter a valid phone number.
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

export default PhoneStep;
