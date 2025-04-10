import React from "react";
import { convertUnixToLocalTime } from "../utils/convertUnixToLocalTime";
import { fromUnixTime, format } from "date-fns";
import { formatToSinhala } from "@/utils/sinhala";
import CountdownDisplay from "./CountdownDisplay";

type NekathCardProps = {
  title: string;
  subTitle?: string;
  description: string;
  image?: string;
  timezone?: string;
  dateTimeUnix: number;
  hideDay?: boolean;
};

type SinhalaTime = { month: string; date: string; day: string };

const NekathCard: React.FC<NekathCardProps> = ({
  title,
  subTitle,
  description,
  image,
  dateTimeUnix,
  timezone,
  hideDay,
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
      {image && (
        <div
          className="h-92 overflow-hidden rounded-2xl bg-slate-100 bg-cover"
          style={{
            backgroundImage: `url(${image.replace(
              "assets/",
              "assets/small/"
            )})`,
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full object-fit mb-3 object-center"
          />
        </div>
      )}

      <div className="flex gap-2 justify-between">
        <div className="flex flex-col w-[80%] gap-2 ">
          <h2 className="font-yaldevi text-2xl lg:text-[36px] font-semibold leading-snug">
            {title}
          </h2>
          {!hideDay && convertedTime.day && (
            <span className="font-yaldevi text-md lg:text-xl bg-white px-3 py-1 rounded-md w-fit">
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

      <p className="mt-3 text-sm lg:text-md font-yaldevi text-gray-800">
        {description}
      </p>
      {!hideDay && <CountdownDisplay dateTimeUnix={dateTimeUnix} />}
    </div>
  );
};

export default NekathCard;
