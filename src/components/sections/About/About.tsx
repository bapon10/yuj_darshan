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
          className="font-heading"
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
        >
          <p className="font-body">
            We are a family of yoga practitioners and teachers who have
            practised and taught yoga across generations — not as a fitness
            trend, but as an embodiment of Tantric and Vedantic thoughts.
          </p>

          <p className="mt-8 font-body">
            At <span className="font-brand">Yuj Darshan</span>, we offer a safe space to study that tradition
            seriously: through body, philosophy, honest self-inquiry and
            awareness. Rooted in the etymology of <span className="font-brand">Yuj Darshan</span>, we want to offer
            ways of establishing an inward harmony.
          </p>
        </div>

        <Philosophy />

      </div>
    </section>
  );
}