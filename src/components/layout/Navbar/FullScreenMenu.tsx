"use client";

import { X } from "lucide-react";

interface FullScreenMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  "Home",
  "About",
  "Experiences",
  "Teachers",
  "Yoga Nidra",
  "Blog",
  "Contact",
];

export default function FullScreenMenu({
  open,
  onClose,
}: FullScreenMenuProps) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[100]
        transition-all
        duration-500

        ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }
      `}
    >
      <div className="absolute inset-0 bg-[var(--paper)]" />

      <button
        onClick={onClose}
        aria-label="Close Menu"
        className="
          absolute
          right-10
          top-10
          z-10
        "
      >
        <X
          className="
            h-8
            w-8
            text-[var(--ink)]
          "
        />
      </button>

      <nav
        className="
          relative
          flex
          h-full
          items-center
          justify-center
        "
      >
        <ul className="space-y-8 text-center">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                onClick={onClose}
                className="
                  text-5xl
                  font-light
                  tracking-[0.18em]
                  text-[var(--ink)]
                  transition-opacity
                  duration-300
                  hover:opacity-60
                "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}