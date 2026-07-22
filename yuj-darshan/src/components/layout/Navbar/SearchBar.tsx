"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface SearchBarProps {
  open: boolean;
  scrolled: boolean;
  onClose: () => void;
}

export default function SearchBar({
  open,
  scrolled,
  onClose,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <div
      className={`
        flex
        items-center
        overflow-hidden
        rounded-full
        border
        transition-all
        duration-500
        ease-out

        ${
          scrolled
            ? "border-black/20 bg-white"
            : "border-white/30 bg-white/10 backdrop-blur-md"
        }

        ${
          open
            ? "w-[260px] px-3 py-1.5 opacity-100"
            : "w-0 px-0 py-0 opacity-0 border-transparent"
        }
      `}
    >
      <Search
        className={`
          mr-2
          h-4
          w-4
          shrink-0

          ${
            scrolled
              ? "text-[var(--ink)]"
              : "text-white"
          }
        `}
      />

      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={`
          flex-1
          bg-transparent
          outline-none
          text-sm

          ${
            scrolled
              ? "text-[var(--ink)] placeholder:text-black/40"
              : "text-white placeholder:text-white/60"
          }
        `}
      />

      <button
        onClick={onClose}
        className="ml-2 shrink-0"
        aria-label="Close Search"
      >
        <X
          className={`
            h-4
            w-4

            ${
              scrolled
                ? "text-[var(--ink)]"
                : "text-white"
            }
          `}
        />
      </button>
    </div>
  );
}