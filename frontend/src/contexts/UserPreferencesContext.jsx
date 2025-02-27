import { createContext, useContext, useState } from "react";

export const DISPLAY_STYLES = {
  list: "list",
  grid: "grid",
};

const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [displayStyle, setDisplayStyle] = useState(DISPLAY_STYLES.list);

  function setList() {
    setDisplayStyle(DISPLAY_STYLES.list);
  }

  function setGrid() {
    setDisplayStyle(DISPLAY_STYLES.grid);
  }

  return (
    <UserPreferencesContext.Provider value={{ displayStyle, setList, setGrid }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  return useContext(UserPreferencesContext);
};
