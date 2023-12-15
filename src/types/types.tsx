import { StaticImageData } from "next/image";

export interface CardProps {
  src: StaticImageData;
  alt: string;
  description: string;
  link: string;
  bgColor: string;
  textColor?: string;
  location: string;
  size: number;
  room: number;
  price: number;
}

export interface RentflowProps {
  productId: string;
}

export interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

export interface FullNameStepProps {
  cb: (fields: { name: string; surname: string }) => void;
}

export interface InputFields {
  name: string;
  surname: string;
}

export interface PhoneStepProps {
  cb: (field: string, value: string) => void;
}

export interface SalaryStepProps {
  cb: (field: string, value: string) => void;
}

export interface SummaryStepProps {
  collectedData: {
    email: string;
    phone: number;
    name: string;
    surname: string;
    salary: string;
    href: string;
  };
}
