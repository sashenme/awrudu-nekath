import { useEffect, useState } from "react";
import timezones from "@/data/timezones.json";

export const useDefaultCountry = () => {
  const [country, setCountry] = useState<string | null>(null);

  useEffect(() => {
    const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const match = timezones.find((entry) =>
      entry.timezones.includes(userTz)
    );

    if (match) {
      setCountry(match.country_code);
    }
  }, []);

  return country;
};
