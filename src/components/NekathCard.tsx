import React from "react";

type NekathCardProps = {
  title: string;
  subTitle?: string;
  date: string;
  time?: string;
  description: string;
  image?: string;
};

const NekathCard: React.FC<NekathCardProps> = ({
  title,
  subTitle,
  date,
  time,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-[#fef9ee] rounded-xl shadow-sm border border-gray-200 max-w-sm w-full">
      {/* {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain mx-auto"
        />
      )} */}

      <h2 className="text-xl font-semibold leading-snug">{title}</h2>
      {subTitle && (
        <h3 className="text-sm text-gray-600 italic">({subTitle})</h3>
      )}

      <span className="bg-white text-sm px-2 py-1 rounded-md w-fit border border-gray-300">
        {date} {time && `| ${time}`}
      </span>

      <p className="text-sm text-gray-800">{description}</p>
    </div>
  );
};

export default NekathCard;
