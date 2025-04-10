import { useState } from "react";
import logo from "@/assets/nekath.svg";
import ReactFlagsSelect from "react-flags-select";

const Header = () => {
  const [selected, setSelected] = useState("LK");

  return (
    <div className="flex justify-between w-full py-8 px-4 items-center">
      <img src={logo} alt="අවුරුදු නැකත් සීට්ටුව" />
      {selected}
      <div className="min-w-40">
        <ReactFlagsSelect
          selected={selected}
          searchable
          onSelect={(code) => setSelected(code)}
          fullWidth
        />
      </div>
    </div>
  );
};

export default Header;
