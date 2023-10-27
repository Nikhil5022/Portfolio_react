import './App.css';
import About from './About.js';
import Projects from './Projects.js';
import Home from './Home';
import { Link, Element, Events } from 'react-scroll';
import Contactus from './Contactus.js';
import ReactSwitch from 'react-switch';
import { useState } from 'react';

function App() {
  const isMobile = window.innerWidth <= 480;
  
  const offsetValue = isMobile ? -150 : -120;
  const [checked, setChecked] = useState(false);
  document.body.style.backgroundColor = checked ? 'rgb(0, 0, 33)' : 'rgb(74, 78, 112)';
  const handleChange = val => {
    setChecked(val)
    console.log(val);
    if(!val){
      document.body.style.backgroundColor ='rgb(74, 78, 112)';
      console.log('dark');
    }
    else{
      document.body.style.backgroundColor ='rgb(0,0,33)';
      console.log('light');
    }
  }

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
        <h1 style={{ color: 'white', cursor: 'pointer' }} onClick={handleclick}><span style={{ fontSize: '3.5rem', backgroundColor: ' rgb(18, 18, 62)' }}>N</span>ikhil's Portfolio</h1>
        <div className='navitems'>
          <ul>
            <li><a href="#/" onClick={handleclick} style={{ textDecoration: 'none' }}>Home</a></li>
            <li><Link to="about" smooth={true} offset={offsetValue} duration={100}>About</Link></li>
            <li><Link to="projects" smooth={true} offset={offsetValue} duration={100}>Projects</Link></li>
            <li><Link to="contact" smooth={true} offset={offsetValue} duration={100}>Contact Me</Link></li>
            <li className='resume'><a href="#/ " style={{ textDecoration: 'none' }} onClick={openresume}>Resume</a></li>
            
          </ul>
        </div>
        <li><ReactSwitch
              checked={checked}
              onChange={handleChange}
            /></li>
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
