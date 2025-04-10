// src/utils/convertUnixToLocalTime.ts
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { fromUnixTime } from "date-fns"; // ← this comes from date-fns
import { sinhalaMonths, sinhalaWeekdays, sinhalaAMPM } from "@/utils/sinhala";

/**
 * Converts a UNIX timestamp to a formatted string in the target timezone.
 * @param unixTimestamp - UNIX time in seconds
 * @param targetTimezone - IANA timezone string (e.g., "Europe/Stockholm")
 * @returns formatted date and time string like '2024 Apr 14, Sunday 03:21 AM'
 */
export function convertUnixToLocalTime(
  unixTimestamp: number,
  targetTimezone: string
): string {
  const utcDate = fromUnixTime(unixTimestamp);
  const zonedDate = toZonedTime(utcDate, targetTimezone);

  return format(zonedDate, "yyyy MMM dd, EEEE hh:mm a");
}


