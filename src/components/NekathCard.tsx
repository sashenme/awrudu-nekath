import React from "react";
import { convertUnixToLocalTime } from "../utils/convertUnixToLocalTime";
import { fromUnixTime, format } from "date-fns";
import { formatToSinhala } from "@/utils/sinhala";

type NekathCardProps = {
  title: string;
  subTitle?: string;
  description: string;
  image?: string;
  timezone?: string;
  dateTimeUnix?: number;
};

type SinhalaTime = { month: string; date: string; day: string };

const NekathCard: React.FC<NekathCardProps> = ({
  title,
  subTitle,
  description,
  // image,
  dateTimeUnix,
  timezone,
}) => {
  const convertedTime: SinhalaTime = dateTimeUnix
    ? formatToSinhala(dateTimeUnix, timezone ?? "Asia/Colombo")
    : {
        month: "",
        date: "",
        day: "",
      };
  return (
    <div className="flex flex-col gap-2 p-4 w-full">
      {/* {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain mx-auto"
        />
      )} */}

      <div className="flex gap-2 justify-between">
        <div className="flex flex-col w-[80%] gap-2 ">
          <h2 className="font-yaldevi text-[36px] font-semibold leading-snug">
            {title}
          </h2>
          {convertedTime.day && (
            <span className="font-yaldevi text-xl bg-white px-2 py-1 rounded-md w-fit">
              {convertedTime.day}
            </span>
          )}
        </div>

        <div className="flex flex-col text-center">
          <span className="font-yaldevi">{convertedTime?.month}</span>
          <span className="text-4xl font-semibold">{convertedTime?.date}</span>
        </div>
      </div>
      {/* {subTitle && (
        <h3 className="text-sm text-gray-600 italic">({subTitle})</h3>
      )} */}

      <p className="mt-3 text-md font-yaldevi text-gray-800">{description}</p>
    </div>
  );
};

export default NekathCard;
