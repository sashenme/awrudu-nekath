import { useDefaultCountry } from "./hooks/useDefaultCountry";
import Content from "@/Content";
import buymecoffee from "@/assets/buymecoffee_logo.svg";
import { trackGAEvent } from "./utils/analytics";

function App() {
  const { country, userTimezone } = useDefaultCountry();

  return (
    <div className="flex flex-col min-h-screen">
      {country && userTimezone && (
        <Content userCountry={country} userTimezone={userTimezone} />
      )}
      {/* {!country && <Content userCountry={"LK"} userTimezone={"Asia/Colombo"} />} */}
      <footer className="mt-auto py-4 text-center text-sm border-t border-gray-200">
        Made with ❤️ by <a href="https://sashen.me">@SashenMe</a>
        <a
          className="pt-2 block"
          target="_blank"
          href="https://buymeacoffee.com/sashenme"
          onClick={() =>
            trackGAEvent("buy_me_coffee", { buy_me_coffee_clicked: true })
          }
        >
          <img
            className="mx-auto max-w-[120px]"
            src={buymecoffee}
            alt="Buy me a cofee!"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
