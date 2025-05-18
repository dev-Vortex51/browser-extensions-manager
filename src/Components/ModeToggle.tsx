import { useAppContext } from "../Contexts/AppContext";

function ModeToggle() {
  const { isDarkMode, setIsDarkMode } = useAppContext();

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div
      className="w-12 h-12 flex items-center justify-center rounded-xl dark:bg-neutral-700 bg-neutral-100 cursor-pointer focus:ring-2 focus:ring-Red-500"
      tabIndex={0}
      onClick={handleToggle}
    >
      <img src={isDarkMode ? "/icon-sun.svg" : "/icon-moon.svg"} alt="" />
    </div>
  );
}

export default ModeToggle;
