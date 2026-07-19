import { useState, useId } from 'react';
import './Accordion.css';

function Accordion({ collapsedLabel, expandedLabel, children }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="accordion">
      <button
        className="accordion__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? expandedLabel : collapsedLabel}
        <span className="accordion__icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div id={panelId} className={`accordion__panel ${open ? 'is-open' : ''}`}>
        <div className="accordion__panel-inner">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;