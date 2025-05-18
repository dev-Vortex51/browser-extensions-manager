import React, { createContext, useEffect, useState } from "react";
import { extensions } from "../Constants/helper";
import { useSearchParams } from "react-router-dom";

export interface Extension {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

interface ChildrenProps {
  children: React.ReactNode;
}

interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  extension: Extension[];
  setExtension: React.Dispatch<React.SetStateAction<Extension[]>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  handleActive: (label: string, baseList?: Extension[]) => void;
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const AppProvider = ({ children }: ChildrenProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [allExtensions, setAllExtensions] = useState<Extension[]>(extensions); // original full list
  const [extension, setExtension] = useState<Extension[]>(extensions); // filtered list
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    setSearchParams({ filter: "all" });
  }, []);

  const handleActive = (label: string, baseList = allExtensions) => {
    setActive(label);
    setSearchParams({ filter: label.toLowerCase() });

    if (label === "All") {
      setExtension(baseList);
    } else if (label === "Active") {
      setExtension(baseList.filter((ext) => ext.isActive));
    } else if (label === "Inactive") {
      setExtension(baseList.filter((ext) => !ext.isActive));
    }
  };

  const handleToggle = (id: number) => {
    const updated = allExtensions.map((ext) =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    );

    setAllExtensions(updated);
    handleActive(active, updated);
  };

  function handleRemove(id: number) {
    if (window.confirm("Are you sure you want to remove this extension?")) {
      const updated = allExtensions.filter((ext) => ext.id !== id);
      setAllExtensions(updated);
      handleActive(active, updated);
    }
  }

  return (
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        extension,
        setExtension,
        active,
        setActive,
        handleActive,
        handleToggle,
        handleRemove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppProvider;
