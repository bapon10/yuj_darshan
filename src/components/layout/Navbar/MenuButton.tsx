"use client";

import { Menu } from "lucide-react";

interface MenuButtonProps {
  scrolled: boolean;
  onClick: () => void;
}

export default function MenuButton({
  scrolled,
  onClick,
}: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Open Menu"
      className="
        group
        flex
        items-center
        gap-2
      "
    >
      <Menu
        className={`
          transition-all
          duration-300

          ${
            scrolled
              ? "w-[18px] h-[18px] text-[var(--ink)]"
              : "w-6 h-6 text-white"
          }
        `}
      />

      <span
        className={`
          overflow-hidden
          whitespace-nowrap
          max-w-0
          opacity-0
          transition-all
          duration-300
          group-hover:max-w-[70px]
          group-hover:opacity-100

          ${
            scrolled
              ? "text-[var(--ink)]"
              : "text-white"
          }
        `}
      >
        Menu
      </span>
    </button>
  );
}