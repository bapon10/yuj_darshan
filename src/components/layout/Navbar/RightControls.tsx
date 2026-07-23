"use client";

import { Language } from "./types";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

interface RightControlsProps {
  scrolled: boolean;
  language: Language;
  searchOpen: boolean;
  onLanguageChange: (language: Language) => void;
  onSearchOpen: () => void;
  onSearchClose: () => void;
}

export default function RightControls({
  scrolled,
  language,
  searchOpen,
  onLanguageChange,
  onSearchOpen,
  onSearchClose,
}: RightControlsProps) {
  return (
    <div
      className="
        absolute
        right-8
        top-1/2
        -translate-y-1/2
        w-[260px]
        h-10
      "
    >
      {/* Language + Search Icon */}
      <div
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-end
          gap-3
          transition-all
          duration-700
          ease-in-out
          ${
            searchOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }
        `}
      >
        <LanguageSwitcher
          scrolled={scrolled}
          language={language}
          onChange={onLanguageChange}
        />

        <SearchButton
          scrolled={scrolled}
          onClick={onSearchOpen}
        />
      </div>

      {/* Search Bar */}
      <div
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-end
          transition-all
          duration-700
          ease-in-out
          ${
            searchOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <SearchBar
          open={searchOpen}
          scrolled={scrolled}
          onClose={onSearchClose}
        />
      </div>
    </div>
  );
}