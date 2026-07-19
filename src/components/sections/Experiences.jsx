import { useState } from 'react';
import { workshops } from '../../data/workshops.js';
import WorkshopCard from '../ui/WorkshopCard.jsx';
import EnrollModal from '../enroll/EnrollModal.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './Experiences.css';

function Experiences() {
  const revealRef = useScrollReveal();
  const [activeWorkshop, setActiveWorkshop] = useState(null);
  const [triggerEl, setTriggerEl] = useState(null);

  const handleEnroll = (workshop, e) => {
    setTriggerEl(e?.currentTarget ?? null);
    setActiveWorkshop(workshop);
  };

  const handleClose = () => {
    setActiveWorkshop(null);
    if (triggerEl) triggerEl.focus();
  };

  return (
    <section id="experiences" className="experiences" ref={revealRef} data-reveal>
      <div className="container">
        <span className="eyebrow">03 — Join Us</span>
        <h2>Experiences We Offer</h2>

        <div className="experiences__grid">
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
              onEnroll={(w) => handleEnroll(w, window.event)}
            />
          ))}
        </div>
      </div>

      {activeWorkshop && (
        <EnrollModal workshop={activeWorkshop} onClose={handleClose} />
      )}
    </section>
  );
}

export default Experiences;