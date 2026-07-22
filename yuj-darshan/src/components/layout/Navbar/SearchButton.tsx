"use client";

import { Search } from "lucide-react";

interface SearchButtonProps {
  scrolled: boolean;
  onClick: () => void;
}

export default function SearchButton({
  scrolled,
  onClick,
}: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Search"
      className="
        flex
        items-center
        justify-center
        transition-transform
        duration-300
        hover:scale-110
      "
    >
      <Search
        className={`
          transition-all
          duration-300

          ${
            scrolled
              ? "w-[18px] h-[18px] text-[var(--ink)]"
              : "w-5 h-5 text-white"
          }
        `}
      />
    </button>
  );
}