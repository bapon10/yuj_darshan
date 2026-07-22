"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Language } from "./types";

interface LanguageSwitcherProps {
  language: Language;
  scrolled: boolean;
  onChange: (language: Language) => void;
}

export default function LanguageSwitcher({
  language,
  scrolled,
  onChange,
}: LanguageSwitcherProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
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
            expanded
              ? "w-[155px]"
              : "w-[56px]"
          }

          ${
            scrolled
              ? "border-black/20"
              : "border-white/40"
          }
        `}
      >
        <button
          onClick={() => onChange("EN")}
          className={`
            rounded-full
            px-3
            py-1.5
            text-xs
            transition-all
            duration-300

            ${
              language === "EN"
                ? scrolled
                  ? "bg-[var(--ink)] text-[var(--paper)]"
                  : "bg-white text-black"
                : scrolled
                  ? "text-black/60 hover:text-black"
                  : "text-white/70 hover:text-white"
            }
          `}
        >
          EN
        </button>

        <button
          onClick={() => onChange("HI")}
          className={`
            rounded-full
            px-3
            py-1.5
            text-xs
            whitespace-nowrap
            transition-all
            duration-300

            ${
              language === "HI"
                ? scrolled
                  ? "bg-[var(--ink)] text-[var(--paper)]"
                  : "bg-white text-black"
                : scrolled
                  ? "text-black/60 hover:text-black"
                  : "text-white/70 hover:text-white"
            }
          `}
        >
          हि
        </button>

        <ChevronDown
          className={`
            ml-auto
            mr-2
            h-3
            w-3
            transition-transform
            duration-300

            ${
              expanded
                ? "rotate-180"
                : ""
            }

            ${
              scrolled
                ? "text-black"
                : "text-white"
            }
          `}
        />
      </div>
    </div>
  );
}