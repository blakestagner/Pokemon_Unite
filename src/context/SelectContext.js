import { createContext, useState, useContext } from "react";

export const SelectContext = createContext(null);
export const useSelectProvider = () => useContext(SelectContext);

export const SelectProvider = ({ children }) => {
  const [roles, setRoles] = useState("all");
  const [styles, setStyles] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [type, setType] = useState("all");

  return (
    <SelectContext.Provider
      value={{
        roles,
        setRoles,
        styles,
        setStyles,
        difficulty,
        setDifficulty,
        type,
        setType,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};
