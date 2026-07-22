"use client";

import { useEffect, useState } from "react";

export default function useSlideshow(
  totalSlides: number,
  interval = 5000
) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, interval);

    return () => clearInterval(id);
  }, [interval, totalSlides]);

  return current;
}