import { visionCopy } from '../../data/copy.js';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './Vision.css';

function Vision() {
  const revealRef = useScrollReveal();

  return (
    <section id="vision" className="vision" ref={revealRef} data-reveal>
      <div className="container">
        <span className="eyebrow" style={{ textAlign: 'center' }}>02 — Our Vision</span>
        <hr className="vision__rule" aria-hidden="true" />
        <div className="vision__panel">
          <p className="vision__quote">{visionCopy.quote}</p>
          <p className="vision__followup">{visionCopy.followUp}</p>
        </div>
      </div>
    </section>
  );
}

export default Vision;