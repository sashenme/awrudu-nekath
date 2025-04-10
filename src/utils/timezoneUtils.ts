import timezonesData from "../data/timezones.json"

export const getTimezonesForCountry = (countryCode: string): string[] => {
  const entry = timezonesData.find(
    (item) => item.country_code.toUpperCase() === countryCode.toUpperCase()
  );
  return entry?.timezones ?? [];
};