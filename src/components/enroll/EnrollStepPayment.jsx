import './EnrollStepPayment.css';

function EnrollStepPayment({ formData, onBack, onComplete }) {
  return (
    <section className="enroll-step">
      <span className="eyebrow">Step 2</span>
      <h3>Confirm your enrollment</h3>
      <p>Review the details below before proceeding to payment.</p>

      <div className="enroll-step__summary">
        <p><strong>Name</strong><br />{formData.name || '—'}</p>
        <p><strong>Email</strong><br />{formData.email || '—'}</p>
        <p><strong>Phone</strong><br />{formData.phone || '—'}</p>
        <p><strong>Preferred batch</strong><br />{formData.batch}</p>
      </div>

      <div className="enroll-step__actions">
        <button className="button button--text" type="button" onClick={onBack}>
          ← Back to details
        </button>
        <button className="button button--primary" type="button" onClick={onComplete}>
          Proceed to payment
        </button>
      </div>
    </section>
  );
}

export default EnrollStepPayment;
