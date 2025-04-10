import { useDefaultCountry } from "./hooks/useDefaultCountry";
import Content from "@/Content";

function App() {
  const { country, userTimezone } = useDefaultCountry();

  return (
    <div className="flex flex-col min-h-screen">
      {country && userTimezone && (
        <Content userCountry={country} userTimezone={userTimezone} />
      )}
      {!country && <Content userCountry={"LK"} userTimezone={"Asia/Colombo"} />}
      <footer className="mt-auto py-4 text-center text-sm border-t border-gray-200">
        Made with ❤️ by <a href="https://sashen.me">Sashen</a>
      </footer>
    </div>
  );
}

export default App;
