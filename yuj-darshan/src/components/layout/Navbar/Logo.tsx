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
      <span
        className={`
          block
          whitespace-nowrap
          font-light
          tracking-[0.35em]
          transition-all
          duration-500
          ease-out

          ${
            scrolled
              ? "text-[20px] text-[var(--ink)]"
              : "text-[30px] text-white"
          }
        `}
      >
        YUJ DARSHAN
      </span>
    </a>
  );
}