import useScrollReveal from '../../hooks/useScrollReveal.js';
import Accordion from '../ui/Accordion.jsx';
import { faqItems } from '../../data/faq.js';
import './FAQ.css';

function FAQ() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      id="faq"
      ref={ref}
      data-reveal
      className={`faq-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <p className="eyebrow">FAQ</p>
        <h2>Questions answered for curious seekers.</h2>
        <div className="faq-section__container">
          <Accordion items={faqItems.map((item, index) => ({ id: `faq-${index}`, title: item.question, content: item.answer }))} />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
