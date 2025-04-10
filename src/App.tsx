import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Header from "./components/Header";
import NekathCard from "./components/NekathCard";
import { getTimezonesForCountry } from "./utils/timezoneUtils";
import TimezoneSelect from "./components/TimezoneSelect";
import { useDefaultCountry } from "./hooks/useDefaultCountry";
import nekathData from "@/data/nekath.json";
import NekathCarousel from "./components/NekathCarosel";

function App() {
  const { country, userTimezone } = useDefaultCountry();

  const [selectedCountry, setSelected] = useState(country ?? "LK");
  const timezonesWithCode = getTimezonesForCountry(selectedCountry);
  const [timezone, setTimezone] = useState(
    userTimezone ? userTimezone : timezonesWithCode[0]
  );

  useEffect(() => {
    setTimezone(timezonesWithCode[0]);
  }, [timezonesWithCode]);

  useEffect(() => {
    if (country) {
      setSelected(country);
    }
  }, [country]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <div className="flex gap-2 flex-col sm:flex-row">
          <ReactFlagsSelect
            selected={selectedCountry}
            searchable
            onSelect={(code) => setSelected(code)}
            fullWidth
            className="min-w-[200px] country-selector"
          />
          {timezonesWithCode.length > 1 && (
            <TimezoneSelect
              timezones={timezonesWithCode}
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
      <footer className="mt-auto py-4 text-center text-sm border-t border-gray-200">
        Made with ❤️ by <a href="https://sashen.me">Sashen</a>
      </footer>
    </div>
  );
}

export default App;
