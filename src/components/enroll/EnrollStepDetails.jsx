import './EnrollStepDetails.css';

function EnrollStepDetails({ formData, errors, onChange, onNext, message }) {
  return (
    <section className="enroll-step">
      <span className="eyebrow">Step 1</span>
      <h3>Tell us about your practice</h3>
      <p>Complete the form so we can tailor the next offering to your needs.</p>

      <div className="enroll-modal__field">
        <label htmlFor="enroll-name">Name</label>
        <input
          id="enroll-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={onChange}
        />
        {errors.name && <span role="alert">{errors.name}</span>}
      </div>

      <div className="enroll-modal__field">
        <label htmlFor="enroll-email">Email</label>
        <input
          id="enroll-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
        />
        {errors.email && <span role="alert">{errors.email}</span>}
      </div>

      <div className="enroll-modal__field">
        <label htmlFor="enroll-phone">Phone</label>
        <input
          id="enroll-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
        />
        {errors.phone && <span role="alert">{errors.phone}</span>}
      </div>

      <div className="enroll-modal__field">
        <label htmlFor="enroll-batch">Preferred batch</label>
        <select id="enroll-batch" name="batch" value={formData.batch} onChange={onChange}>
          <option>Friday 19:00</option>
          <option>Saturday 10:00</option>
          <option>Tuesday 08:30</option>
        </select>
      </div>

      {message && <p className="enroll-modal__message" role="alert">{message}</p>}

      <button className="button button--primary" type="button" onClick={onNext}>
        Continue to payment
      </button>
    </section>
  );
}

export default EnrollStepDetails;
