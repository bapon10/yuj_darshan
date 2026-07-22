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
        flex
        items-center
        gap-3
      "
    >
      <LanguageSwitcher
        scrolled={scrolled}
        language={language}
        onChange={onLanguageChange}
      />

      <SearchBar
        open={searchOpen}
        scrolled={scrolled}
        onClose={onSearchClose}
      />

      {!searchOpen && (
        <SearchButton
          scrolled={scrolled}
          onClick={onSearchOpen}
        />
      )}
    </div>
  );
}