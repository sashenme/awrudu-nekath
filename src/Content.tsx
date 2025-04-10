import { FC, useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Header from "@/components/Header";
import { getTimezonesForCountry } from "@/utils/timezoneUtils";
import TimezoneSelect from "@/components/TimezoneSelect";
import { useDefaultCountry } from "@/hooks/useDefaultCountry";
import nekathData from "@/data/nekath.json";
import NekathCarousel from "@/components/NekathCarosel";

interface Props {
  userTimezone: string;
  userCountry: string;
}
const Content: FC<Props> = ({ userTimezone, userCountry }) => {
  const [selectedCountry, setSelected] = useState(userCountry);
  const timezonesWithCode = getTimezonesForCountry(selectedCountry);

  const [timezone, setTimezone] = useState(userTimezone);
  const [countryTimezones, setCountryTimezones] =
    useState<string[]>(timezonesWithCode);

  useEffect(() => {
    if (userCountry) {
      setSelected(userCountry);
      const timezonesWithCode = getTimezonesForCountry(selectedCountry);

      setCountryTimezones(timezonesWithCode);
    }
  }, [userCountry]);

  const onCountrySelect = (code: string) => {
    setSelected(code);
    setCountryTimezones(timezonesWithCode);
    setTimezone(timezonesWithCode[0]);
  };

  return (
    <>
      <Header>
        <div className="flex gap-2 flex-col sm:flex-row">
          <ReactFlagsSelect
            selected={selectedCountry}
            searchable
            onSelect={(code) => onCountrySelect(code)}
            fullWidth
            className="min-w-[200px] userCountry-selector"
          />
          {countryTimezones.length > 1 && (
            <TimezoneSelect
              timezones={countryTimezones}
              value={timezone}
              onChange={(val) => setTimezone(val)}
            />
          )}
        </div>
      </Header>
      <main>
        <NekathCarousel
          country={selectedCountry}
          nekathData={nekathData}
          timezone={timezone}
        />
      </main>
    </>
  );
};

export default Content;
