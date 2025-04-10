import React from "react";
import { convertUnixToLocalTime } from "../utils/convertUnixToLocalTime";

type NekathCardProps = {
  title: string;
  subTitle?: string;
  description: string;
  image?: string;
  timezone?: string;
  dateTimeUnix?: number;
};

const NekathCard: React.FC<NekathCardProps> = ({
  title,
  subTitle,
  description,
  // image,
  dateTimeUnix,
  timezone,
}) => {
  const convertedTime = dateTimeUnix
    ? convertUnixToLocalTime(dateTimeUnix, timezone ?? "Asia/Colombo")
    : dateTimeUnix;

  return (
    <div className="flex flex-col gap-2 p-4 bg-[#fef9ee] rounded-xl border border-gray-200 max-w-sm w-full">
      {/* {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain mx-auto"
        />
      )} */}

      <h2 className="font-yaldevi text-xl font-semibold leading-snug">
        {title}
      </h2>
      {subTitle && (
        <h3 className="text-sm text-gray-600 italic">({subTitle})</h3>
      )}

      <span className="bg-white text-sm px-2 py-1 rounded-md w-fit border border-gray-300">
        {convertedTime}
      </span>

      <p className="text-sm text-gray-800">{description}</p>
    </div>
  );
};

export default NekathCard;
