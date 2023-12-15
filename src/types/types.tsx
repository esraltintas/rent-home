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
