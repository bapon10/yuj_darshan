import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />
        {/* Vision */}
        <section id="vision">
          <h2>Vision</h2>

          <blockquote>
            We are all seekers at different points in our life. Every question
            and every inquiry is a sign of alignment.
          </blockquote>

          <p>
            If you are ready to take up the journey of self-awareness, rooted in
            the ancient wisdom of sages and various traditions — then we are
            ready to help you.
          </p>
        </section>

        {/* Experiences */}
        <section id="experiences">
          <h2>Experiences We Offer</h2>

          <article>
            <p>5-Day Workshop</p>

            <h3>Conscious Living through Tantra</h3>

            <p>
              <em>Vibrant Consciousness through Tantra</em>
            </p>

            <p>Morning: Hatha Yoga + Pranayama (1 hr 45 mins)</p>

            <p>
              Evening: Kundalini Meditation + Tantra Philosophy (1 hr 30 mins +
              15 mins bonus)
            </p>

            <p>
              A five-day journey into the Tantric tradition, rooted in the Bihar
              Yoga lineage — a holistic path toward harmony of body and mind,
              and the art of conscious living.
            </p>

            <div>
              <p>
                Embark on a transformative five-day journey into the profound
                wisdom of the Tantric tradition. This intensive workshop is
                thoughtfully designed to introduce seekers to the foundational
                principles and practices of Tantra and Kundalini in a clear,
                authentic, and accessible way.
              </p>

              <p>
                Rooted in the Bihar Yoga Tradition, the programme offers a
                holistic approach that nurtures harmony of body, mind, and helps
                cultivate awareness. Through a balanced blend of yogic
                practices, meditation, philosophy, and self-inquiry,
                participants are guided toward greater inner balance, clarity,
                and the art of conscious living.
              </p>

              <p>
                Far more than a series of lectures, this workshop is an
                immersive learning experience that engages both the body and the
                intellect. Whether you are beginning your spiritual journey or
                seeking to deepen your existing practice, you will gain access
                to timeless insights from our experienced and learned teachers,
                and a deeper understanding of the expansive philosophy of
                Tantra.
              </p>
            </div>
          </article>

          <article>
            <p>5-Day Workshop</p>

            <h3>The Atman Workshop</h3>

            <p>
              <em>Awareness-Centred Living through Vedanta</em>
            </p>

            <p>Morning: Yin Yoga + Pranayama / Yoga Nidra</p>

            <p>Evening: Vedanta Philosophy + Meditation</p>

            <p>
              A restorative journey into the heart of Advaita Vedanta —
              self-inquiry, contemplation and healing, distilled from the
              Upanishads and the teachings of Adi Shankaracharya.
            </p>

            <div>
              <p>
                Join us for a 5-day immersive journey into the heart of Advaita
                Vedanta — a path toward awareness-centred living. This is a
                restorative workshop designed for those seeking to go deeper:
                into self-inquiry, contemplation, and healing.
              </p>

              <p>
                At its core, Vedanta is described as the highest reach of human
                understanding — not a belief system, but a direct inquiry into
                the nature of reality and the self. This foundational course
                extracts the essence of the Upanishads and the timeless
                teachings of sages like Adi Shankaracharya, making ancient
                wisdom accessible, relevant and directly applicable to the
                questions we carry today.
              </p>

              <p>
                Each day unfolds in two movements. Mornings open the body and
                breath — Yin Yoga, Pranayama, and Yoga Nidra create the
                stillness needed for deeper reflection to take root. Evenings
                turn inward — Vedanta philosophy and meditation guide you
                through a structured inquiry into the nature of the self, and
                offer a lens for meeting the confusions, restlessness, and
                search for meaning that mark modern life.
              </p>

              <p>
                At the weekends, we host book circles and discussion circles
                that revolve around the concepts discussed in class —
                philosophy, doubts, and reflections shared in community.
              </p>

              <p>
                This workshop is for those who are drawn to ask:
                <em> Who am I, beneath all that I do and think?</em> No prior
                philosophical background is needed — only curiosity, and a
                willingness to sit with oneself.
              </p>
            </div>
          </article>
        </section>

        {/* Teachers */}
        <section id="teachers">
          <h2>Meet Our Teachers</h2>

          <article>
            <h3>Teacher Name</h3>
            <p>Role / Tradition</p>
            <p>Teacher biography placeholder.</p>
          </article>

          <article>
            <h3>Teacher Name</h3>
            <p>Role / Tradition</p>
            <p>Teacher biography placeholder.</p>
          </article>

          <article>
            <h3>Teacher Name</h3>
            <p>Role / Tradition</p>
            <p>Teacher biography placeholder.</p>
          </article>

          <p>Request a one on one session with our teachers.</p>
        </section>

        {/* Yoga Nidra */}
        <section id="yoga-nidra">
          <h2>Guided Yoga Nidra</h2>

          <p>Coming Soon</p>

          <h3>Recorded Sessions</h3>

          <p>
            We are preparing a library of guided Yoga Nidra recordings —
            restful, voice-led journeys you can practise at home, whenever you
            need to return to stillness. Leave your email below and we'll let
            you know the moment they're ready.
          </p>

          <form>
            <input
              type="email"
              placeholder="Enter your email"
            />
            <button type="submit">Notify me</button>
          </form>
        </section>

        {/* Blog */}
        <section id="blog">
          <h2>Blog</h2>

          <article>
            <p>Vedanta</p>
            <h3>What the Upanishads Mean by "Self"</h3>
            <a href="#">Read more</a>
          </article>

          <article>
            <p>Tantra</p>
            <h3>Kundalini, Beyond the Myth</h3>
            <a href="#">Read more</a>
          </article>

          <article>
            <p>Practice</p>
            <h3>Why Yin Yoga Pairs So Well with Stillness</h3>
            <a href="#">Read more</a>
          </article>
        </section>

        {/* Footer */}
        <footer id="footer">
          <h2>Yuj Darshan</h2>

          <p>A journey to Self.</p>

          <nav>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#vision">Vision</a>
            <a href="#experiences">Experiences</a>
            <a href="#teachers">Teachers</a>
            <a href="#yoga-nidra">Yoga Nidra</a>
            <a href="#blog">Blog</a>
          </nav>

          <p>Contact</p>

          <p>© Yuj Darshan</p>
        </footer>

      </main>
    </>
  );
}