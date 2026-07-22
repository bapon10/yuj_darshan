"use client";

import { useEffect } from "react";

import FullScreenMenu from "./FullScreenMenu";
import LeftControls from "./LeftControls";
import Logo from "./Logo";
import RightControls from "./RightControls";
import useNavbar from "./useNavbar";

export default function Navbar() {
  const navbar = useNavbar("hero");

  useEffect(() => {
    document.body.style.overflow = navbar.menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navbar.menuOpen]);

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
          ease-out

          ${
            navbar.scrolled
              ? "bg-[var(--paper)] border-b border-[var(--hair)] shadow-sm py-3"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="relative mx-auto h-10 max-w-[1600px]">
          <LeftControls
            scrolled={navbar.scrolled}
            onMenuClick={navbar.openMenu}
          />

          <Logo
            scrolled={navbar.scrolled}
          />

          <RightControls
            scrolled={navbar.scrolled}
            language={navbar.language}
            searchOpen={navbar.searchOpen}
            onLanguageChange={
              navbar.setLanguage
            }
            onSearchOpen={
              navbar.openSearch
            }
            onSearchClose={
              navbar.closeSearch
            }
          />
        </div>
      </header>

      <FullScreenMenu
        open={navbar.menuOpen}
        onClose={navbar.closeMenu}
      />
    </>
  );
}