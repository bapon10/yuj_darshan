import useScrollReveal from '../../hooks/useScrollReveal.js';
import './TrustStrip.css';

function TrustStrip() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="trust-strip"
      ref={ref}
      data-reveal
      className={`trust-strip ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <p className="eyebrow">Trusted by seekers</p>
        <h2>Practice supported by tradition, care, and quiet attention.</h2>
      </div>
    </section>
  );
}

export default TrustStrip;
