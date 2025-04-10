import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Header from "./components/Header";
import NekathCard from "./components/NekathCard";
import { getTimezonesForCountry } from "./utils/timezoneUtils";
import TimezoneSelect from "./components/TimezoneSelect";

function App() {
  const nekathData = [
    {
      title: "අළුත් අවුරුද්ද උදාව",
      subTitle: "New Year Dawning",
      dateTimeUnix: 1744581060,
      description: "සිංහල අලුත් අවුරුද්ද උදා වේ.",
      image: "/assets/new-year.png",
    },
    {
      title: "පුණ්‍ය කාලය ආරම්භය",
      subTitle: "Start of Nonagathaya",
      dateTimeUnix: 1744558020,
      description: "පුණ්‍ය කාලය ආරම්භ වේ.",
      image: "/assets/nonagathaya.png",
    },
    {
      title: "පුණ්‍ය කාලය අවසානය",
      subTitle: "End of Nonagathaya",
      dateTimeUnix: 1744604100,
      description: "පුණ්‍ය කාලය අවසන් වේ.",
      image: "/assets/nonagathaya.png",
    },
    {
      title: "ආහාර පිසීම",
      subTitle: "Cooking Meals",
      dateTimeUnix: 1744583640,
      description:
        "තඹ වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා කිරි බතක් හා කැවිලි පිසීම මැනවි.",
      image: "/assets/cooking.png",
    },
    {
      title: "වැඩ ඇල්ලීම",
      subTitle: "Commencing Work",
      dateTimeUnix: 1744593240,
      description:
        "මුතු හා ස්වේත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී සියලු වැඩ ඇල්ලීම මැනවි.",
      image: "/assets/activities.png",
    },
    {
      title: "හිස තෙල් ගෑම",
      subTitle: "Anointing Oil",
      dateTimeUnix: 1744774440,
      description: "කොළ පැහැති වස්ත්‍රාභරණයෙන් උතුරු දිශාව බලා තෙල් ගෑම මැනවි.",
      image: "/assets/anointing.png",
    },
    {
      title: "රැකී රක්ෂා පිටත්ව යාම",
      subTitle: "Leaving for Work",
      dateTimeUnix: 1744860780,
      description:
        "රන්වන් පැහැති වස්ත්‍රාභරණයෙන් උතුරු දිශාව බලා පිටත්ව යාම මැනවි.",
      image: "/assets/leaving-work.png",
    },
    {
      title: "පැළ සිටුවීම",
      subTitle: "Planting",
      dateTimeUnix: 1744951560,
      description:
        "විචිත්‍ර වර්ණ වස්ත්‍රාභරණයෙන් නැගෙනහිර දිශාව බලා පැළ සිටුවීම මැනවි.",
      image: "/assets/planting.png",
    },
  ];

  const [selectedCountry, setSelected] = useState("LK");
  const timezonesWithCode = getTimezonesForCountry(selectedCountry);
  const [timezone, setTimezone] = useState(timezonesWithCode[0]);

  useEffect(() => {
    setTimezone(timezonesWithCode[0]);
  }, [timezonesWithCode]);
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
      <main className="container mx-auto flex-grow">
        <div className="px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nekathData.map((item, index) => (
            <NekathCard key={index} {...item} timezone={timezone} />
          ))}
        </div>
      </main>
      <footer className="mt-auto py-4 text-center text-sm border-t border-gray-200">
        Made with ❤️ by <a href="https://sashen.me">Sashen</a>
      </footer>
    </div>
  );
}

export default App;
