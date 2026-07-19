import { useEffect, useState } from 'react';
import MobileNav from './MobileNav.jsx';
import './Header.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#vision', label: 'Vision' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#teachers', label: 'Teachers' },
  { href: '#nidra', label: 'Yoga Nidra' },
  { href: '#faq', label: 'FAQ' },
  { href: '#blog', label: 'Blog' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner container">
          <a href="#top" className="site-header__logo" aria-label="Yuj Darshan home">
            <span className="site-header__logo-mark" aria-hidden="true">✦</span>
            <span className="site-header__logo-text">Yuj Darshan</span>
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="site-header__hamburger"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="site-header__hamburger-bar" aria-hidden="true" />
            <span className="site-header__hamburger-bar" aria-hidden="true" />
            <span className="site-header__hamburger-bar" aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileNav
        id="mobile-nav"
        open={mobileOpen}
        links={NAV_LINKS}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}

export default Header;
