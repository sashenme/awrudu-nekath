import Header from "./components/Header";
import NekathCard from "./components/NekathCard";

function App() {
  const nekathData = [
    {
      title: "නව සඳ බැලීම",
      subTitle: "New Moon Sighting",
      date: "මාර්තු 30 / මැයි 01",
      time: "",
      description:
        "අභිනව චන්ද්‍ර වර්ෂය සඳහා මාර්තු 30 වනදාද, අභිනව සූර්ය වර්ෂය සඳහා මැයි 01 වනදාද නව සඳ බැලීම මැනවී.",
      image: "/assets/new-moon.png",
    },
    {
      title: "පරණ අවුරුද්ද සඳහා ස්නානය",
      subTitle: "Bathing for the Old Year",
      date: "අප්‍රේල් 13",
      time: "ඉරිදා",
      description:
        "දිඹුල්පත් යුෂ මිශ්‍ර නානු ගා ස්නානය කොට ඉෂ්ට දේවතා අනුස්මරණයෙහි යෙදී වාසය මැනවි.",
      image: "/assets/bath-old-year.png",
    },
    {
      title: "අළුත් අවුරුද්ද උදාව",
      subTitle: "New Year Dawning",
      date: "අප්‍රේල් 14",
      time: "සඳුදා, පූර්ව භාග 03.21",
      description: "සිංහල අලුත් අවුරුද්ද උදා වේ.",
      image: "/assets/new-year.png",
    },
    {
      title: "පුණ්‍ය කාලය",
      subTitle: "Nonagathaya - Neutral Period",
      date: "අප්‍රේල් 13 - 14",
      time: "අප්‍රේල් 13, 08.57 PM - අප්‍රේල් 14, 09.45 AM",
      description:
        "අප්‍රේල් 13 දින 08.57 සිට අප්‍රේල් 14 දින 09.45 දක්වා පුණ්‍ය කාලය. පුණ්‍ය කාලයේ ආගමික වතාවත් වල යෙදීම, ආහාර පිසීම, වැඩ ඇල්ලීම, ගනුදෙනු, ආහාර අනුභවය ඇතුළු නැකත් චාරිත්‍ර මැනවි.",
      image: "/assets/nonagathaya.png",
    },
    {
      title: "ආහාර පිසීම",
      subTitle: "Cooking Meals",
      date: "අප්‍රේල් 14",
      time: "සඳුදා, පූර්ව භාග 04.04",
      description:
        "තඹ වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැද ගිණි මොළවා කිරි බතක් හා කැවිලි පිසීම මැනවි.",
      image: "/assets/cooking.png",
    },
    {
      title: "වැඩ ඇල්ලීම, ගනුදෙණු, ආහාර අනුභවය",
      subTitle: "Commencing Work, Transactions & Meals",
      date: "අප්‍රේල් 14",
      time: "සඳුදා, පූර්ව භාග 06.44",
      description:
        "මුතු හා ස්වේත වර්ණ වස්ත්‍රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියලු වැඩ ඇල්ලීම, ගනුදෙනු හා ආහාර අනුභවය මැනවි.",
      image: "/assets/activities.png",
    },
    {
      title: "හිස තෙල් ගෑම",
      subTitle: "Anointing Oil",
      date: "අප්‍රේල් 16",
      time: "බදාදා, පූර්ව භාග 09.04",
      description:
        "පච්ච වර්ණ හෙවත් කොළ පැහැති වස්ත්‍රාභරණයෙන් සැරසී උතුරු දිශාව බලා හිසට කොහොඹ පත් සහ නානු තෙල් ගෑම මැනවි.",
      image: "/assets/anointing.png",
    },
    {
      title: "රැකී රක්ෂා සඳහා පිටත්ව යාම",
      subTitle: "Leaving for Work",
      date: "අප්‍රේල් 17",
      time: "බ්‍රහස්පතින්දා, පූර්ව භාග 09.03",
      description:
        "රන්වන් පැහැති වස්ත්‍රාභරණයෙන් සැරසී කිරි බතක් හා කැවිලි අනුභව කර උතුරු දිශාව බලා පිටත්ව යාම මැනවි.",
      image: "/assets/leaving-work.png",
    },
    {
      title: "පැළ සිටුවීම",
      subTitle: "Planting",
      date: "අප්‍රේල් 18",
      time: "සිකුරාදා, පූර්ව භාග 10.16",
      description:
        "විචිත්‍ර වර්ණ වස්ත්‍රාභරණයෙන් සැරසී නැගෙනහිර දිශාව බලා පැළ සිටුවීම මැනවි.",
      image: "/assets/planting.png",
    },
  ];

  return (
    <div className="container mx-auto">
      <Header />
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nekathData.map((item, index) => (
          <NekathCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default App;
