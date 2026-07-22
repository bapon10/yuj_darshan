"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Language = "EN" | "HI";

type NavbarContextType = {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;

  searchOpen: boolean;
  setSearchOpen: (value: boolean) => void;

  language: Language;
  setLanguage: (value: Language) => void;
};

const NavbarContext = createContext<NavbarContextType | null>(null);

export function NavbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [language, setLanguage] =
    useState<Language>("EN");

  return (
    <NavbarContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
        searchOpen,
        setSearchOpen,
        language,
        setLanguage,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error(
      "useNavbar must be used inside NavbarProvider"
    );
  }

  return context;
}