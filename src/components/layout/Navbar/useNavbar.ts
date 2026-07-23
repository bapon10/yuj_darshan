"use client";

import { useEffect, useState } from "react";
import { Language } from "./types";

interface UseNavbarReturn {
  scrolled: boolean;
  menuOpen: boolean;

  searchOpen: boolean;

  language: Language;

  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;

  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;

  setLanguage: (language: Language) => void;
}

export default function useNavbar(
  heroId = "hero"
): UseNavbarReturn {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [language, setLanguage] =
    useState<Language>("EN");

  useEffect(() => {
    const hero = document.getElementById(heroId);

    if (!hero) return;

    const update = () => {
      const trigger =
        hero.offsetHeight * 0.1;

      setScrolled(window.scrollY >= trigger);
    };

    update();

    window.addEventListener(
      "scroll",
      update,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, [heroId]);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handler
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );
  }, []);

  return {
    scrolled,

    menuOpen,

    searchOpen,

    language,

    openMenu: () => setMenuOpen(true),

    closeMenu: () => setMenuOpen(false),

    toggleMenu: () =>
      setMenuOpen((v) => !v),

    openSearch: () =>
      setSearchOpen(true),

    closeSearch: () =>
      setSearchOpen(false),

    toggleSearch: () =>
      setSearchOpen((v) => !v),

    setLanguage,
  };
}