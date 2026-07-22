import "./About.css";
import AboutDivider from "./AboutDivider";
import Philosophy from "./Philosophy";

export default function About() {
  return (
    <section
      id="about"
      className="
        bg-paper
        px-6
        py-32
      "
    >
      <div className="mx-auto max-w-4xl">

        <h2
          className="text-center text-4xl text-ink"
          style={{ fontFamily: "var(--font-italiana)" }}
        >
          About Us
        </h2>

        <AboutDivider />

        <div
          className="
            mx-auto
            mt-10
            max-w-3xl
            text-center
            text-lg
            leading-9
            text-ink/85
          "
          style={{ fontFamily: "var(--font-karla)" }}
        >
          <p>
            We are a family of yoga practitioners and teachers who have
            practised and taught yoga across generations — not as a fitness
            trend, but as an embodiment of Tantric and Vedantic thoughts.
          </p>

          <p className="mt-8">
            At Yuj Darshan, we offer a safe space to study that tradition
            seriously: through body, philosophy, honest self-inquiry and
            awareness. Rooted in the etymology of Yuj Darshan, we want to offer
            ways of establishing an inward harmony.
          </p>
        </div>

        <Philosophy />

      </div>
    </section>
  );
}