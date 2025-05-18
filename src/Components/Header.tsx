import { useAppContext } from "../Contexts/AppContext";
import ModeToggle from "./ModeToggle";

const Header = () => {
  const { isDarkMode } = useAppContext();
  return (
    <header className="flex items-center justify-between dark:bg-neutral-800 rounded-2xl bg-neutral-0 w-full py-2 px-4">
      <img src={isDarkMode ? "/logo_white.svg" : "/logo.svg"} alt="" />
      <ModeToggle />
    </header>
  );
};

export default Header;
