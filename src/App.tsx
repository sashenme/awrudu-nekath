import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Header from "./components/Header";
import NekathCard from "./components/NekathCard";
import { getTimezonesForCountry } from "./utils/timezoneUtils";
import TimezoneSelect from "./components/TimezoneSelect";
import { useDefaultCountry } from "./hooks/useDefaultCountry";

function App() {
  const nekathData = [
    {
      title: "නව සඳ බැලීම",
      subTitle: "New Year Dawning",
      dateTimeUnix: 1743344000,
      hideDay: true,
      description:
        "අභිනව චන්ද්‍ර වර්ෂය සඳහා මාර්තු 30 වනදාද අභිනව සූර්ය වර්ෂය සඳහා මැයි 01 වනදා ද නව සඳ බැලීම මැනවී.",
      image: "/assets/new-year.png",
    },
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
        "තඹ වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැද ගිණි මොළවා කිරිබතක් ද කැවිලි වර්ගයක්ද දී කිරි හා විළඳ ද පිළියෙල කර ගැනීම මැනවි.",
      image: "/assets/cooking.png",
    },
    {
      title: "වැඩ ඇල්ලීම, ගනුදෙණු කිරීම හා ආහාර අනුභවය",
      subTitle: "Commencing Work",
      dateTimeUnix: 1744593240,
      description:
        "මුතු හා ස්වේත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියළු වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභවය මැනවි.",
      image: "/assets/activities.png",
    },
    {
      title: "හිස තෙල් ගෑම",
      subTitle: "Anointing Oil",
      dateTimeUnix: 1744774440,
      description:
        "පච්ච වර්ණ හෙවත් කොළ පැහැති වස්ත්‍රාභරණයෙන් සැරසී උතුරු දිශාව බලා හිසට කොහොඹ පත්ද, පයට කොළොන් පත්ද තබා කොහොඹ පත් යුෂ මිශ්‍ර නානුද තෙල්ද ගා ස්නානය කිරීම මැනවි.",
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
  const country = useDefaultCountry();

  const [selectedCountry, setSelected] = useState(country ?? "LK");
  const timezonesWithCode = getTimezonesForCountry(selectedCountry);
  const [timezone, setTimezone] = useState(timezonesWithCode[0]);

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
      <main className="container mx-auto flex-grow pb-20">
        <div className="px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-10 lg:gap-12">
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
