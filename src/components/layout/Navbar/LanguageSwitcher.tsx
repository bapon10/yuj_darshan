"use client";

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
  return (
    <div className="relative mr-4">
      <div className="relative flex items-center">
        {/* EN */}
        <button
          onClick={() => onChange("EN")}
          className={`
            relative
            px-2
            py-1.5
            text-xs
            tracking-[0.12em]
            transition-colors
            duration-500
            ease-in-out

            ${
              language === "EN"
                ? scrolled
                  ? "text-[var(--ink)]"
                  : "text-[var(--paper)]"
                : scrolled
                  ? "text-black/45"
                  : "text-white/45"
            }
          `}
        >
          EN

          <span
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-1.5
              h-[2px]
              rounded-full
              transition-all
              duration-700
              ease-in-out

              ${
                language === "EN"
                  ? "w-5 opacity-100"
                  : "w-0 opacity-0"
              }

              ${
                scrolled
                  ? "bg-[var(--ink)]"
                  : "bg-[var(--paper)]"
              }
            `}
          />
        </button>

        {/* HI */}
        <button
          onClick={() => onChange("HI")}
          className={`
            relative
            px-2
            py-1.5
            text-xs
            tracking-[0.08em]
            transition-colors
            duration-500
            ease-in-out

            ${
              language === "HI"
                ? scrolled
                  ? "text-[var(--ink)]"
                  : "text-[var(--paper)]"
                : scrolled
                  ? "text-black/45"
                  : "text-white/45"
            }
          `}
        >
          हि

          <span
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-1.5
              h-[2px]
              rounded-full
              transition-all
              duration-700
              ease-in-out

              ${
                language === "HI"
                  ? "w-5 opacity-100"
                  : "w-0 opacity-0"
              }

              ${
                scrolled
                  ? "bg-[var(--ink)]"
                  : "bg-[var(--paper)]"
              }
            `}
          />
        </button>
      </div>
    </div>
  );
}