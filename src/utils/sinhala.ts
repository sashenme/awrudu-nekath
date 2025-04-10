import { fromUnixTime } from "date-fns";

export const sinhalaMonths = {
  Jan: "ජනවාරි",
  Feb: "පෙබරවාරි",
  Mar: "මාර්තු",
  Apr: "අප්‍රේල්",
  May: "මැයි",
  Jun: "ජූනි",
  Jul: "ජූලි",
  Aug: "අගෝස්තු",
  Sep: "සැප්තැම්බර්",
  Oct: "ඔක්තෝබර්",
  Nov: "නොවැම්බර්",
  Dec: "දෙසැම්බර්",
} as const;

export const sinhalaWeekdays = {
  Sunday: "ඉරිදා",
  Monday: "සඳුදා",
  Tuesday: "අඟහරුවාදා",
  Wednesday: "බදාදා",
  Thursday: "බ්‍රහස්පතින්දා",
  Friday: "සිකුරාදා",
  Saturday: "සෙනසුරාදා",
} as const;

export const sinhalaAMPM = {
  AM: "පූර්ව භාග",
  PM: "අපර භාග",
} as const;


export const formatToSinhala = (
  unixTime: number,
  timezone: string
): string => {
  const date = fromUnixTime(unixTime);
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(date);

  const map: Record<string, string> = {};
  parts.forEach((p) => {
    map[p.type] = p.value;
  });

  const month = sinhalaMonths[map.month as keyof typeof sinhalaMonths] ?? map.month;
  const weekday = sinhalaWeekdays[map.weekday as keyof typeof sinhalaWeekdays] ?? map.weekday;
  const period = sinhalaAMPM[map.dayPeriod as keyof typeof sinhalaAMPM] ?? map.dayPeriod;

  return `${map.year} ${month} ${map.day} වන ${weekday} ${period} ${map.hour}:${map.minute} `;
};