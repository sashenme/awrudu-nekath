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

  const [timezone, setTimezone] = useState(userTimezone);
  const [countryTimezones, setCountryTimezones] = useState<string[]>([]);

  useEffect(() => {
    if (userCountry) {
      setSelected(userCountry);
      const timezonesWithCode = getTimezonesForCountry(userCountry);

      setCountryTimezones(timezonesWithCode);
    }
  }, [userCountry]);

  const onCountrySelect = (code: string) => {
    const timezonesWithCode = getTimezonesForCountry(code);

    setSelected(code);
    setCountryTimezones(timezonesWithCode);
    setTimezone(timezonesWithCode[0]);
  };

  return (
    <>
      <Header>
        <div className="flex gap-2 px-2">
          <label htmlFor="country">
            <span className="text-sm text-neutral-500">Select Country</span>
            <ReactFlagsSelect
              selected={selectedCountry}
              searchable
              onSelect={(code) => onCountrySelect(code)}
              fullWidth
              className="sm:min-w-[200px] country-selector"
            />
          </label>
          {countryTimezones.length > 1 && (
            <label htmlFor="country">
              <span className="text-sm text-neutral-500">Select Timezone</span>
              <TimezoneSelect
                timezones={countryTimezones}
                value={timezone}
                onChange={(val) => setTimezone(val)}
              />
            </label>
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
