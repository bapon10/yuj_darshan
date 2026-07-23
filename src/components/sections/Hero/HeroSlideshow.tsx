"use client";

import Image from "next/image";
import { slides } from "./slides";
import useSlideshow from "./useSlideshow";

export default function HeroSlideshow() {
  const current = useSlideshow(slides.length);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt=""
          fill
          priority={index === 0}
          className={`
            object-cover
            transition-opacity
            duration-[1800ms]
            ${
              current === index
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/70" />
    </div>
  );
}