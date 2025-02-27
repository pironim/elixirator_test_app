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
    <div className="w-full h-40">
      <h3>Select Display Style</h3>
      <button
        className={
          "text-lg bg-green-200 m-4 p-5 border-2 border-dotted" +
          activeButton(DISPLAY_STYLES.grid)
        }
        onClick={setGrid}
      >
        {DISPLAY_STYLES.grid}
      </button>
      <button
        className={
          "text-lg bg-blue-200 m-4 p-5 border-2 border-dotted" +
          activeButton(DISPLAY_STYLES.list)
        }
        onClick={setList}
      >
        {DISPLAY_STYLES.list}
      </button>
    </div>
  );
}
