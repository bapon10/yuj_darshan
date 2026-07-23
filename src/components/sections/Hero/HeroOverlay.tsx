export default function HeroOverlay() {
  return (
    <div
      className="
        relative
        z-10
        flex
        h-screen
        flex-col
        items-center
        justify-center
        text-center
        text-white
      "
      style={{ textShadow: "0 8px 30px rgba(0,0,0,0.8)" }}
    >
      <p className="mb-5 text-4xl tracking-[0.2em] font-brand">
        Yuj Darshan
      </p>

      <h1
        className="
          text-12xl
          text-8xl
          font-medium
          tracking-[0.18em]
          text-white
          drop-shadow-[0_8px_80px_rgba(0,0,0,1)]
          font-heading
        "
      >
        A Journey to Self
      </h1>
    </div>
  );
}