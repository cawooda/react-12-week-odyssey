import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-4 flex flex-col bg-bg dark:bg-blue-950 dark:text-bg sm:flex-row justify-between items-start sm:items-center gap-4">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          React 12-Week Odyssey
        </h1>

        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-lg bg-primary transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
    </div>
  );
}

export default Header;
