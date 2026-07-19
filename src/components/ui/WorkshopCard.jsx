import Accordion from './Accordion.jsx';
import Button from './Button.jsx';
import './WorkshopCard.css';

function WorkshopCard({ workshop, onEnroll }) {
  return (
    <article className={`workshop-card workshop-card--${workshop.accent}`}>
      <span className="eyebrow">{workshop.kicker}</span>
      <h3 className="workshop-card__title">{workshop.title}</h3>
      <p className="workshop-card__subtitle">{workshop.subtitle}</p>

      <dl className="workshop-card__schedule">
        {workshop.schedule.map((row) => (
          <div className="workshop-card__schedule-row" key={row.time}>
            <dt>{row.time}</dt>
            <dd>
              {row.activity}
              {row.duration && <span className="workshop-card__duration"> — {row.duration}</span>}
            </dd>
          </div>
        ))}
      </dl>

      <p className="workshop-card__teaser">{workshop.teaser}</p>

      <Accordion collapsedLabel="Read full overview" expandedLabel="Hide full overview">
        {workshop.fullOverview.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Accordion>

      <div className="workshop-card__actions">
        <Button variant="primary" onClick={() => onEnroll(workshop)}>
          Enroll now
        </Button>
      </div>
    </article>
  );
}

export default WorkshopCard;