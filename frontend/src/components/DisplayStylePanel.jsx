import listIcon from "../assets/listIcon.svg";
import gridIcon from "../assets/gridIcon.svg";

import {
  useUserPreferences,
  DISPLAY_STYLES,
} from "../contexts/UserPreferencesContext";

export default function DisplayStylePanel() {
  const { displayStyle, setList, setGrid } = useUserPreferences();

  function activeButton(buttonName) {
    return buttonName == displayStyle ? " border-solid text-black-100" : " ";
  }

  return (
    <>
      <h3>Select Display Style</h3>
      <button
        className={
          "text-lg bg-green-200 m-4 p-5 border-2 border-dotted" +
          activeButton(DISPLAY_STYLES.grid)
        }
        onClick={setGrid}
      >
        <img className="object-center" src={gridIcon} alt="grid icon " />
      </button>
      <button
        className={
          "text-lg bg-blue-200 m-4 p-5 border-2 border-dotted" +
          activeButton(DISPLAY_STYLES.list)
        }
        onClick={setList}
      >
        <img src={listIcon} alt="list icon " />
      </button>
    </>
  );
}
