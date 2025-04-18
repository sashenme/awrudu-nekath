import { useEffect, useState } from "react";
import timezones from "@/data/timezones.json";

export const useDefaultCountry = () => {
  const userTz = Intl.DateTimeFormat("en-US").resolvedOptions().timeZone;
  const [country, setCountry] = useState<string | null>(null);
  const [userTimezone, setUserTimezone] = useState<string>(userTz);
  console.log(Intl.DateTimeFormat().resolvedOptions())
  useEffect(() => {

    const match = timezones.find((entry) =>
      entry.timezones.includes(userTz)
    );
    setUserTimezone(userTz)
    if (match) {
      setCountry(match.country_code);
    }
  }, []);

  return { country, userTimezone };
};
