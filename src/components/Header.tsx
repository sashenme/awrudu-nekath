import { FC, ReactElement } from "react";
import logo from "@/assets/nekath.svg";
interface Props {
  children: ReactElement;
}
const Header: FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-between w-full py-8 px-4 items-center">
      <img src={logo} alt="අවුරුදු නැකත් සීට්ටුව" />
      <div className="min-w-40">{children}</div>
    </div>
  );
};

export default Header;
