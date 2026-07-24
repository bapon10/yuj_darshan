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
      <div className="mx-auto max-w-7xl">

        <h2
          className="
            font-heading
            text-center
            text-4xl
            text-ink
            tracking-wide
          "
        >
          About Us
        </h2>

        <AboutDivider />

          {/* LEFT COLUMN */}

          <div>

            <p
              className="
                font-body
                text-3xl
                leading-tight
                text-ink
                text-center
                mt-9
              "
            >
              We are a family of yoga practitioners and teachers who have
              practised and taught yoga across generations—not as a fitness
              trend, but as an embodiment of Tantric and Vedantic thoughts.
            </p>

          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-2 items-start">
          <div
                className="
                  aspect-[4/5]
                  rounded-lg
                  bg-paper-3
                  border
                  border-hair
                  flex
                  items-center
                  justify-center
                "
              >
            Image Placeholder
          </div>
          
          <div className="space-y-10">

            <p
              className="
                font-body
                text-lg
                leading-8
                text-ink-soft
                mt-10
              "
            >
              At <span className="font-brand text-indigo-deep">Yuj Darshan</span>,
              we offer a safe space to study that tradition seriously:
              through body, philosophy, honest self-inquiry and awareness.
              Rooted in the etymology of
              <span className="font-brand text-indigo-deep">
                {" "}Yuj Darshan
              </span>,
              we want to offer ways of establishing an inward harmony.
            </p>

            <Philosophy />

          </div>

        </div>

      </div>
    </section>
  );
}