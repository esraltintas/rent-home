import React from "react";
import { SummaryStepProps } from "@/types/types";
import Link from "next/link";

const SummaryStep: React.FC<SummaryStepProps> = ({ collectedData }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      {Object.entries(collectedData).map(
        ([key, value]) =>
          key !== "href" && (
            <div key={key} className="flex justify-between items-center">
              <span>{key}</span>
              <span>{value}</span>
            </div>
          )
      )}
      {collectedData.href && (
        <Link
          className="bg-slate-100 hover:bg-slate-200 text-black py-2 px-3 m-5 rounded-2xl"
          href={collectedData.href}
        >
          Rent
        </Link>
      )}
    </div>
  );
};

export default SummaryStep;
