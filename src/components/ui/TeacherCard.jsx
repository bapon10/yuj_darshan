import './TeacherCard.css';

function TeacherCard({ teacher }) {
  return (
    <article className={`teacher-card ${teacher.spotlight ? 'teacher-card--spotlight' : ''}`}>
      <div className="teacher-card__photo" aria-hidden="true">
        {/* Photo placeholder — replace with <img src="..." alt={teacher.name} /> */}
        <span>Photo goes here</span>
      </div>

      <h3 className="teacher-card__name">{teacher.name}</h3>
      <p className="teacher-card__role">{teacher.role}</p>
      <p className="teacher-card__bio">{teacher.bio}</p>

      {teacher.spotlight && teacher.quote && (
        <blockquote className="teacher-card__quote">“{teacher.quote}”</blockquote>
      )}
    </article>
  );
}

export default TeacherCard;