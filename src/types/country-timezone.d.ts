export const getTimezonesForCountry = async (countryCode: string): Promise<string[]> => {
  const ct = await import('countries-and-timezones');
  const country = ct.default.getCountry(countryCode);
  return country?.timezones ?? [];
};