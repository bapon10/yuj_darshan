import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import SkipLink from './components/ui/SkipLink.jsx';
import Hero from './components/sections/Hero.jsx';
import AboutUs from './components/sections/AboutUs.jsx';
import Vision from './components/sections/Vision.jsx';
import Experiences from './components/sections/Experiences.jsx';
import Teachers from './components/sections/Teachers.jsx';
import Blog from './components/sections/Blog.jsx';

function App() {
  return (
    <>
      <SkipLink />
      <div id="top" />
      <Header />
      <main id="main-content">
        <Hero />
        <AboutUs />
        <Vision />
        <Experiences />
        <Teachers />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

export default App;