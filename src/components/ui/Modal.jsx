import { useEffect, useRef } from 'react';
import useFocusTrap from '../../hooks/useFocusTrap.js';
import './Modal.css';

function Modal({ open, title, onClose, children }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useFocusTrap(contentRef, open);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const onOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" ref={overlayRef} onMouseDown={onOverlayClick} role="presentation">
      <div className="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={contentRef}>
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close dialog">
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
