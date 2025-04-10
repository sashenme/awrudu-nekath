import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NekathCard from "./NekathCard";
import { getCountryName } from "@/utils/timezoneUtils";

interface NekathItem {
  dateTimeUnix: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

interface Props {
  nekathData: NekathItem[];
  timezone: string;
  country: string;
}

const NekathCarousel: React.FC<Props> = ({ nekathData, timezone, country }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full space-y-4">
      {/* Buttons row at the top */}
      <div className="container mx-auto flex justify-between gap-4 items-center px-4 ">
        <h2 className="text-md md:text-xl font-yaldevi">
          Awurudu Nekath for{" "}
          {timezone
            .replace("Asia/", "")
            .replace("Europe/", "")
            .replace("Africa/", "")
            .replace("Pacific/", "")
            .replace("America/", "")
            .replace("Australia/", "")
            .replaceAll("_", " ")}
          , {getCountryName(country)}
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-white border rounded-full shadow"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-white border rounded-full shadow"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div className="w-full overflow-x-auto scroll-smooth" ref={scrollRef}>
        <div className="flex snap-x snap-mandatory gap-6 px-6  scroll-pl-6">
          {nekathData.map((item, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[33%] xl:w-[24%]"
            >
              <NekathCard {...item} timezone={timezone} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NekathCarousel;
