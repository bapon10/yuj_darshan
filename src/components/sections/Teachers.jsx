import { teachers, teachersSectionHeading, teachersCTA } from '../../data/teachers.js';
import TeacherCard from '../ui/TeacherCard.jsx';
import Button from '../ui/Button.jsx';
import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import './Teachers.css';

function Teachers() {
  const revealRef = useScrollReveal();

  return (
    <section id="teachers" className="teachers" ref={revealRef} data-reveal>
      <div className="container">
        <span className="eyebrow">04 — Our Guides</span>
        <h2>{teachersSectionHeading}</h2>

        <div className="teachers__grid">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        <div className="teachers__cta">
          <Button as="a" variant="text" href={teachersCTA.href}>
            {teachersCTA.text}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Teachers;