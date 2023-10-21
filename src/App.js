import './App.css';
import About from './About.js';
import Projects from './Projects.js';
import Home from './Home';
import { Link, Element, Events } from 'react-scroll';
import Contactus from './Contactus.js';

function App() {
  const isMobile = window.innerWidth <= 480; // Adjust the breakpoint as needed

  const offsetValue = isMobile ? -150 : -100; // Set different offsets for mobile and laptop

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > navbar.offsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', handleScroll);
  Events.scrollEvent.register('begin', function () { });
  Events.scrollEvent.register('end', function () { });

  const openresume = () => {
    window.open('https://drive.google.com/file/d/1Cp8hVGeB9JfUPhtOWJi-e2kJFAEI9bqz/view?usp=share_link', '_blank');
  }

  const handleclick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="navbar">
        <h1 style={{ color: 'white', cursor: 'pointer' }} onClick={handleclick}>NIKHIL'S PORTFOLIO</h1>
        <div className='navitems'>
          <ul>
            <li><a href="#/" onClick={handleclick} style={{textDecoration:'none'}}>Home</a></li>
            <li><Link to="about" smooth={true} offset={offsetValue} duration={100}>About</Link></li>
            <li><Link to="projects" smooth={true} offset={offsetValue} duration={100}>Projects</Link></li>
            <li><Link to="contact" smooth={true} offset={offsetValue} duration={100}>Contact Me</Link></li>
            <li className='resume'><a href="#/ " style={{textDecoration:'none'}} onClick={openresume}>Resume</a></li>
          </ul>
        </div>
      </div>
      <Home />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contactus />
      </Element>
    </>
  );
}

export default App;
