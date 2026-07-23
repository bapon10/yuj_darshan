"use client";

import { useEffect, useRef, useState } from "react";

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
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [open, onClose]);

  return (
    <div
      ref={wrapperRef}
      className={`
        flex
        items-center
        overflow-hidden
        border-b
        rounded-none
        transition-all
        duration-500
        ease-out

        ${
          scrolled
            ? "border-black/30 bg-transparent"
            : "border-white/60 bg-transparent"
        }

        ${
        open
          ? "w-[220px] py-1 opacity-100"
          : "w-[220px] py-1 opacity-0 pointer-events-none"
        }
      `}
      style={{
        boxShadow: "none",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        spellCheck={false}
        autoComplete="off"
        style={{
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          boxShadow: "none",
        }}
        className={`
          w-full
          bg-transparent
          border-none
          outline-none
          ring-0
          shadow-none

          focus:outline-none
          focus:ring-0
          focus:border-transparent
          focus:shadow-none

          focus-visible:outline-none
          focus-visible:ring-0
          focus-visible:border-transparent
          focus-visible:shadow-none

          text-sm

          ${
            scrolled
              ? "text-[var(--ink)] placeholder:text-black/40"
              : "text-white placeholder:text-white/60"
          }
        `}
      />
    </div>
  );
}