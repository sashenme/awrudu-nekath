import React, { useState } from "react";
import logo from "@/assets/nekath.svg";
import ReactFlagsSelect from "react-flags-select";

const Header = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex justify-between w-full">
      <img src={logo} alt="අවුරුදු නැකත් සීට්ටුව" />
      {selected}
      <ReactFlagsSelect
        selected={selected}
        onSelect={(code) => setSelected(code)}
      />
    </div>
  );
};

export default Header;
