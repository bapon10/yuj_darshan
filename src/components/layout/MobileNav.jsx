import { useEffect, useRef } from 'react';
import './MobileNav.css';

function MobileNav({ id, open, links, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <div
      id={id}
      className={`mobile-nav ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
      ref={panelRef}
    >
      <nav aria-label="Mobile primary">
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={onClose} tabIndex={open ? 0 : -1}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
