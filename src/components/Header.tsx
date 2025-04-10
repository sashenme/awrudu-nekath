import { FC, ReactElement } from "react";
import logo from "@/assets/nekath.svg";
interface Props {
  children: ReactElement;
}
const Header: FC<Props> = ({ children }) => {
  return (
    <header className="container mx-auto flex gap-4 flex-col sm:flex-row justify-between w-full py-8 px-4 items-center">
      <img
        src={logo}
        alt="අවුරුදු නැකත් සීට්ටුව"
        className="max-w-[400px] w-full"
      />
      <div className="min-w-40">{children}</div>
    </header>
  );
};

export default Header;
