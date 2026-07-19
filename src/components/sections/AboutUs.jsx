import { aboutUsCopy } from '../../data/copy.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './AboutUs.css';

function AboutUs() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="about" ref={revealRef} data-reveal>
      <div className="container about__grid">
        <div className="about__label">
          <span className="eyebrow">01 — Who We Are</span>
          <h2>About Us</h2>
        </div>

        <div className="about__copy">
          {aboutUsCopy.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="about__callout">
            <p>{aboutUsCopy.etymologyCallout}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;