import { useCountdown } from "@/hooks/useCountdown";

type DateTagProps = {
  children: React.ReactNode;
};

const DateTag: React.FC<DateTagProps> = ({ children }) => {
  return (
    <span className="font-inter font-semibold text-xl md:text-3xl px-1">
      {children}
    </span>
  );
};

type ItemProps = {
  label: string;
  time: number;
};

const Item: React.FC<ItemProps> = ({ label, time }) => {
  return (
    <span className="flex gap-2 gap-y-0 items-center flex-wrap justify-around">
      <span className="text-xs md:text-base ">{label}</span>
      <DateTag>{time}</DateTag>
    </span>
  );
};

type CountdownDisplayProps = {
  dateTimeUnix: number;
};

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({
  dateTimeUnix,
}) => {
  const { days, hours, minutes, seconds, isFinished } =
    useCountdown(dateTimeUnix);

  if (isFinished) {
    return <p className="text-[#7A1214] text-sm">නැකත දින අවසන් වී ඇත</p>;
  }

  return (
    <p className="mt-4 py-2 px-4 justify-center gap-3 rounded-2xl flex items-center font-yaldevi font-medium border border-[#7a121462] text-[#7A1214]">
      <Item label="දින" time={days} />
      <Item label="පැය" time={hours} />
      <Item label="මිනිත්තු" time={minutes} />
      <Item label="තත්පර" time={seconds} />
    </p>
  );
};

export default CountdownDisplay;
