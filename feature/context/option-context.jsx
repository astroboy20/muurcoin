import { createContext, useContext, useState } from "react";

const OptionContext = createContext({
  option: "Exchange",
  switchOption: () => {},
});

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState("Exchange");

  const switchOption = (optionValue) => {
    setOption(optionValue);
  };

  return (
    <OptionContext.Provider value={{ option, switchOption }}>
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = () => useContext(OptionContext);
