"use client";

interface LogoProps {
  scrolled: boolean;
}

export default function Logo({
  scrolled,
}: LogoProps) {
  return (
    <a
      href="#hero"
      aria-label="Yuj Darshan Home"
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        select-none
      "
    >
<div
  className={`
    flex
    items-center
    justify-center
    gap-0
    transition-all
    duration-500
    ease-out
  `}
>
  {/* Logo */}

  <span
    className={`
      text-[30px]
      transition-all
      duration-500

      ${
        scrolled
          ? "text-[22px] text-[var(--ink)]"
          : "text-[30px] text-white"
      }
    `}
  >
    LOGO
  </span>

  {/* Brand Name */}

  <span
    className={`
      overflow-hidden
      whitespace-nowrap
      transition-all
      duration-500
      ease-out
      font-brand

      ${
        scrolled
          ? "max-w-[240px] ml-3 opacity-100 text-[18px] tracking-[0.22em] text-[var(--ink)]"
          : "max-w-0 ml-0 opacity-0"
      }
    `}
  >
    YUJ DARSHAN
  </span>
</div>
    </a>
  );
}