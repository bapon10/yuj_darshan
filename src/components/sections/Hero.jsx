import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';
import './Hero.css';

function Hero() {
  const [mottoVisible, setMottoVisible] = useState(false);
  const [cueVisible, setCueVisible] = useState(false);
  const videoRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      // No autoplay, no delay — show content immediately
      setMottoVisible(true);
      setCueVisible(true);
      return;
    }

    const video = videoRef.current;
    let fallbackTimer;

    const showMotto = () => {
      setMottoVisible(true);
      setTimeout(() => setCueVisible(true), 500);
    };

    if (video) {
      const onTimeUpdate = () => {
        if (video.currentTime >= 1.5) {
          showMotto();
          video.removeEventListener('timeupdate', onTimeUpdate);
        }
      };
      video.addEventListener('timeupdate', onTimeUpdate);

      // Fallback in case video fails to load/play
      fallbackTimer = setTimeout(showMotto, 2500);

      return () => {
        video.removeEventListener('timeupdate', onTimeUpdate);
        clearTimeout(fallbackTimer);
      };
    } else {
      fallbackTimer = setTimeout(showMotto, 1500);
      return () => clearTimeout(fallbackTimer);
    }
  }, [reducedMotion]);

  return (
    <section className="hero" aria-label="Introduction">
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          {/* Client to supply: MP4, min. 1920x1080, ~15-25s seamless loop, no audio */}
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      ) : (
        // Reduced motion: static poster image instead of video
        <img
          className="hero__video"
          src="/images/hero-poster.jpg"
          alt=""
          aria-hidden="true"
        />
      )}

      <div className="hero__scrim" aria-hidden="true" />

      <div className={`hero__content container ${mottoVisible ? 'is-visible' : ''}`}>
        <span className="hero__tag">Yoga · Tantra · Vedanta</span>
        <h1 className="hero__title">
          Yuj <em>Darshan</em>
        </h1>
        <p className="hero__tagline">A journey to Self</p>
      </div>

      <div className={`scroll-cue ${cueVisible ? 'is-visible' : ''}`} aria-hidden="true">
        <span className="scroll-cue__line" />
        <span className="scroll-cue__label">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;