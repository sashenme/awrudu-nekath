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
  dateTimeEndUnix?: number;
  hideDay?: boolean;
};

type SinhalaTime = { month: string; date: string; day: string };

const NekathCard: React.FC<NekathCardProps> = ({
  title,
  subTitle,
  description,
  image,
  dateTimeUnix,
  dateTimeEndUnix,
  timezone,
  hideDay,
}) => {
  const isNonagathaya = subTitle === "Nonagathaya";
  const now = Math.floor(Date.now() / 1000);

  const isPast =
    now > (isNonagathaya && dateTimeEndUnix ? dateTimeEndUnix : dateTimeUnix);
  const isActive =
    !isPast &&
    now >= dateTimeUnix &&
    (isNonagathaya
      ? !!dateTimeEndUnix && now <= dateTimeEndUnix
      : now < dateTimeUnix + 3600);

  const displayUnix =
    isNonagathaya && dateTimeEndUnix && now > dateTimeUnix
      ? dateTimeEndUnix
      : dateTimeUnix;

  const convertedTime: SinhalaTime = displayUnix
    ? formatToSinhala(displayUnix, timezone ?? "Asia/Colombo")
    : {
        month: "",
        date: "",
        day: "",
      };

  const formatNonagathaya = () => {
    if (!dateTimeEndUnix) return description;
    const formattedStart = formatToSinhala(
      dateTimeUnix,
      timezone ?? "Asia/Colombo",
    );
    const formattedEnd = formatToSinhala(
      dateTimeEndUnix,
      timezone ?? "Asia/Colombo",
    );
    const descriptionFormatted = description
      .replace(
        /START_DATE/g,
        `${formattedStart.month} ${formattedStart.date}  ${formattedStart.day} `,
      )
      .replace(/END_DATE/g, `${formattedEnd.date}  ${formattedEnd.day} `);

    return descriptionFormatted;
  };

  return (
    <div className="relative flex flex-col gap-2 w-full rounded-2xl transition-shadow duration-300">
      {isPast && (
        <span className="absolute top-2 left-2 z-10 text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-200/90 text-gray-500 backdrop-blur-sm font-inter">
          අවසන්!
        </span>
      )}
      {isActive && (
        <span className="absolute top-2 left-2 z-10 flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100/90 text-green-700 backdrop-blur-sm font-inter">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
          </span>
          දැන් තමයි නැකත!
        </span>
      )}
      {image && (
        <div
          className="h-92 sm:h-90 overflow-hidden rounded-2xl bg-slate-100 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image.replace(
              "assets/",
              "assets/small/",
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
        {formatNonagathaya()}
      </p>

      {!hideDay && (
        <CountdownDisplay
          endText={
            isNonagathaya && now > dateTimeUnix ? "පුණ්‍ය කාලය අවසන් වීමට" : ""
          }
          dateTimeUnix={displayUnix}
        />
      )}
    </div>
  );
};

export default NekathCard;
