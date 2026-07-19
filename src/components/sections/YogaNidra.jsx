import { useState } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import './YogaNidra.css';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function YogaNidra() {
  const [ref, isVisible] = useScrollReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPattern.test(email.trim())) {
      setStatus({ message: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setStatus({ message: 'Thank you — we will notify you when Yoga Nidra opens.', type: 'success' });
    setEmail('');
  };

  return (
    <section
      id="nidra"
      ref={ref}
      data-reveal
      className={`yoga-nidra-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container yoga-nidra-grid">
        <div className="yoga-nidra__content">
          <span className="eyebrow">Coming soon</span>
          <h2>Guided Yoga Nidra — an invitation to rest.</h2>
          <p>
            A gentle offering for deep rest, held in a supportive setting. Leave the day behind and return
            to fuller clarity.
          </p>
        </div>

        <form className="yoga-nidra__form" onSubmit={handleSubmit} noValidate>
          <div className="yoga-nidra__field">
            <label htmlFor="nidra-email">Email address</label>
            <input
              id="nidra-email"
              className="yoga-nidra__input"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="button button--primary yoga-nidra__button">
            Notify me
          </button>
          <p className="yoga-nidra__status" role="alert" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}

export default YogaNidra;
