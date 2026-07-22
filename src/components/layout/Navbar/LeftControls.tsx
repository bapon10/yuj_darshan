"use client";

import MenuButton from "./MenuButton";

interface LeftControlsProps {
  scrolled: boolean;
  onMenuClick: () => void;
}

export default function LeftControls({
  scrolled,
  onMenuClick,
}: LeftControlsProps) {
  return (
    <div
      className="
        absolute
        left-8
        top-1/2
        -translate-y-1/2
        flex
        items-center
      "
    >
      <MenuButton
        scrolled={scrolled}
        onClick={onMenuClick}
      />
    </div>
  );
}