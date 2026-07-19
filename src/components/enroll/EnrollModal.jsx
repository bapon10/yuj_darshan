// Stub — full two-step enroll flow (details form + payment summary,
// focus trap, Escape/outside-click close) comes in the next step.
function EnrollModal({ workshop, onClose }) {
  return (
    <div className="enroll-modal-stub" role="dialog" aria-modal="true">
      <p>Enroll modal placeholder for: {workshop.title}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default EnrollModal;