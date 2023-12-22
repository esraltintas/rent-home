import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCouch,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "@/types/types";
import RentButton from "../RentButton/RentButton";

const Card: React.FC<CardProps> = ({
  src,
  alt,
  description,
  price,
  location,
  size,
  room,
  link,
  bgColor,
  textColor = "text-black",
  dataTestId,
}) => {
  return (
    <div
      className={`flex flex-1 justify-center ${bgColor} pt-8`}
      data-testid={dataTestId}
    >
      <div className="max-w-md pb-20">
        <Image
          src={src}
          width={200}
          height={100}
          alt={alt}
          className="rounded-md"
          layout="responsive"
        />
        <div className={`text-xl pt-2 ${textColor}`}>
          £{price} <span className="text-slate-600 text-sm">/Monat</span>
        </div>

        <div className={`text-xl pt-2 pb-2 ${textColor}`}>{description}</div>
        <div className="flex justify-between content-center items-center">
          <div className="flex flex-row text-zinc-800 gap-4">
            <div>
              <FontAwesomeIcon icon={faLocationDot} className="pr-1" />
              <span className="text-slate-600 text-sm">{location}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCouch} className="pr-1" />
              <span className="text-slate-600 text-sm">{size}m2</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faLayerGroup} className="pr-1" />
              <span className="text-slate-600 text-sm">{room}</span>
            </div>
          </div>
          <RentButton href={link} />
        </div>
      </div>
    </div>
  );
};

export default Card;
