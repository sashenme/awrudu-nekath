import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NekathCard from "./NekathCard";
import { getCountryName } from "@/utils/timezoneUtils";

interface NekathItem {
  dateTimeUnix: number;
  dateTimeEndUnix?: number;
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

const getSortTime = (item: NekathItem, now: number) =>
  item.subTitle === "Nonagathaya" && item.dateTimeEndUnix && now > item.dateTimeUnix
    ? item.dateTimeEndUnix
    : item.dateTimeUnix;

const NekathCarousel: React.FC<Props> = ({ nekathData, timezone, country }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const sortedData = [...nekathData].sort((a, b) => {
    const now = Math.floor(Date.now() / 1000);
    return getSortTime(a, now) - getSortTime(b, now);
  });

  // Auto-scroll to first upcoming event on mount
  useEffect(() => {
    const now = Math.floor(Date.now() / 1000);
    const firstUpcomingIndex = sortedData.findIndex(
      (item) => getSortTime(item, now) > now
    );
    if (firstUpcomingIndex > 0 && cardRefs.current[firstUpcomingIndex]) {
      cardRefs.current[firstUpcomingIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, []);

  // Track active card via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveIndex(i);
            }
          });
        },
        { root: scrollRef.current, threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [nekathData.length]);

  return (
    <div className="w-full space-y-4">
      {/* Buttons row at the top */}
      <div className="container mx-auto flex justify-between gap-4 items-center px-4 mb-4">
        <h2 className="text-sm sm:text-xl font-yaldevi">
          Awurudu Nekath for <br className="sm:hidden" />
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
            className="cursor-pointer p-2 bg-white border border-[#7a121430] rounded-full shadow transition-all duration-150 hover:bg-[#7A1214] hover:text-white hover:border-[#7A1214] hover:shadow-md active:scale-90"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="cursor-pointer p-2 bg-white border border-[#7a121430] rounded-full shadow transition-all duration-150 hover:bg-[#7A1214] hover:text-white hover:border-[#7A1214] hover:shadow-md active:scale-90"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div
        className="w-full overflow-x-auto scroll-smooth mb-6"
        ref={scrollRef}
      >
        <div className="flex snap-x snap-mandatory gap-8 md:gap-12 px-4 sm:px-8 scroll-pl-2 sm:scroll-pl-6">
          {sortedData.map((item, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="snap-start shrink-0 w-[90%] sm:w-[50%] md:w-[30%] lg:w-[22%] xl:w-[17%] animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards transition-transform ease-out hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <NekathCard {...item} timezone={timezone} />
            </div>
          ))}
          <div className="px-2"></div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 -mt-4 pb-2">
        {sortedData.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              cardRefs.current[i]?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              })
            }
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-4 h-2 bg-[#7A1214]"
                : "w-2 h-2 bg-[#7A1214]/30"
            }`}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NekathCarousel;
