import './Footer.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#teachers', label: 'Teachers' },
  { href: '#faq', label: 'FAQ' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__logo-mark" aria-hidden="true">✦</span>
          <p className="site-footer__wordmark">Yuj Darshan</p>
          <p className="site-footer__tagline">A journey to Self</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <a href="mailto:hello@yujdarshan.com">hello@yujdarshan.com</a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {new Date().getFullYear()} Yuj Darshan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
