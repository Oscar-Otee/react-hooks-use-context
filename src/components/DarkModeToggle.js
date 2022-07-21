import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleToggleTheme(event) {
    setTheme(event.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;

