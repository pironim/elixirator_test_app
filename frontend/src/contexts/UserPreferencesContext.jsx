import { createContext, useContext, useState } from "react";

export const DISPLAY_STYLES = {
  list: "list",
  grid: "grid",
};

const LOCAL_STORAGE_KEY = "userPreferences";

const UserPreferencesContext = createContext();

export const UserPreferencesProvider = ({ children }) => {
  const [displayStyle, setDisplayStyle] = useState(() => {
    const savedPreferences = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedPreferences || DISPLAY_STYLES.list;
  });

  function setList() {
    localStorage.setItem(LOCAL_STORAGE_KEY, DISPLAY_STYLES.list);
    setDisplayStyle(DISPLAY_STYLES.list);
  }

  function setGrid() {
    localStorage.setItem(LOCAL_STORAGE_KEY, DISPLAY_STYLES.grid);
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
