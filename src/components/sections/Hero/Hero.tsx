import HeroOverlay from "./HeroOverlay";
// import HeroSlideshow from "./HeroSlideshow";
import "./Hero.css";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-black
      "
    >
      {/* <HeroSlideshow /> */}

      <HeroOverlay />
      <ScrollIndicator />
    </section>
  );
}