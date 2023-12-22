import React from "react";
import { SummaryStepProps } from "@/types/types";
import RentButton from "../RentButton/RentButton";
const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      {Object.entries(collectedData).map(
        ([key, value]) =>
          key !== "href" && (
            <div key={key} className="flex justify-between items-center">
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <span>{value}</span>
            </div>
          )
      )}
      {collectedData.href && <RentButton href={collectedData.href} />}
    </div>
  );
};

export default SummaryStep;
