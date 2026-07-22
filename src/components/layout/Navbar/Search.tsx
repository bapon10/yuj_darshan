import { Search } from "lucide-react";

type Props = {
  scrolled: boolean;
};

export default function SearchButton({
  scrolled,
}: Props) {
  return (
    <button
      className="
        transition-all
        duration-300
        hover:scale-110
      "
    >
      <Search
        className={`
          ${
            scrolled
              ? "text-black w-[18px] h-[18px]"
              : "text-white w-5 h-5"
          }
        `}
      />
    </button>
  );
}