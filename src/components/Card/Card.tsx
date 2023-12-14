import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCouch,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "@/types/types";

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
}) => {
  return (
    <div className={`flex flex-1 justify-center ${bgColor} pt-8`}>
      <div className="px-48">
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
          <Link
            href={link}
            className="bg-slate-100 hover:bg-slate-200 text-black py-1 px-3 rounded-2xl"
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
