import React from "react";
import Link from "next/link";
import { SummaryStepProps } from "@/types/types";

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        {props.collectedData.name && (
          <div>Name: {props.collectedData.name}</div>
        )}
        {props.collectedData.surname && (
          <div>Surname: {props.collectedData.surname}</div>
        )}
        {props.collectedData.email && (
          <div>Email: {props.collectedData.email}</div>
        )}
        {props.collectedData.phone && (
          <div>Phone: {props.collectedData.phone}</div>
        )}
      </div>
      {props.collectedData.href && (
        <Link
          className="bg-slate-100 hover:bg-slate-200 text-black py-1 px-3 rounded-2xl"
          href={props.collectedData.href}
        >
          Rent
        </Link>
      )}
    </div>
  );
};

export default SummaryStep;
