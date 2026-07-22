import { ArrowDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-4
        text-white
      "
    >
      <p
        className="text-xs uppercase tracking-[0.35em] opacity-90"
        style={{ fontFamily: "var(--font-karla)" }}
      >
        Begin the Journey
      </p>

      <div className="animate-scroll-arrow">
        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="text-white"
        />
      </div>
    </div>
  );
}