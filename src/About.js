import React, { useEffect, useRef } from 'react';
import './About.css';
import wipro from './Images/wipro.jpg';
import ebox from './Images/ebox.jpg';
import me from './Images/me.jpg';

export default function About() {
  const photoRef = useRef(null);
  const paraRef = useRef(null);
  const achievementsimgRef = useRef(null);
  const achievementsparaRef = useRef(null);
  const secondimgRef = useRef(null);
  const secondparaRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the element is in the viewport
    };

    const intersectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if(entry.target === photoRef.current) {
            photoRef.current.classList.add('active');
          }
          else if(entry.target === paraRef.current) {
            paraRef.current.classList.add('active');
            }
          else if(entry.target === achievementsimgRef.current) {
            achievementsimgRef.current.classList.add('active');
          }
          else if(entry.target === achievementsparaRef.current) {
            achievementsparaRef.current.classList.add('active');
          }
          else if(entry.target === secondimgRef.current) {
            secondimgRef.current.classList.add('active');
          }
          else if(entry.target === secondparaRef.current) {
            secondparaRef.current.classList.add('active');
          }
          else if(entry.target === skillsRef.current) {
            skillsRef.current.classList.add('active');
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(photoRef.current);
    observer.observe(paraRef.current);
    observer.observe(achievementsimgRef.current);
    observer.observe(achievementsparaRef.current);
    observer.observe(secondimgRef.current);
    observer.observe(secondparaRef.current);
    observer.observe(skillsRef.current);
  }, []);

  return (
    <>
      <div className="aboutme">
        <h2 style={{ color: 'white' }}>ABOUT ME</h2>
        <br />
        <div className='details'>
          <img ref={photoRef} src={me} alt="MyPhoto" />
          <p  ref={paraRef}>
            Hello, I'm G. Sai Nikhil, a full-stack developer with a passion for crafting innovative solutions in the dynamic IT sector. I thrive on challenges and am dedicated to contributing my technical expertise and problem-solving skills to the world of software engineering.
          </p>
        </div>
      </div>
      <br /><br />
      <div className='achievements'>
        <h2 style={{ color: 'white', fontSize: '2rem' }}>Achievements</h2>
        <div className='first'>
          <img src={wipro} alt="wipro certificate" ref={achievementsimgRef} />
          <p ref={achievementsparaRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat nam quia voluptas non? Beatae, natus repudiandae. Voluptatum velit molestias ab mollitia beatae expedita, vero voluptate ex aut aspernatur inventore?
          </p>
        </div>
        <div className='second'>
          <p ref={secondparaRef}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat nam quia voluptas non? Beatae, natus repudiandae. Voluptatum velit molestias ab mollitia beatae expedita, vero voluptate ex aut aspernatur inventore?
          </p>
          <img src={ebox} alt="ebox certificate" ref={secondimgRef} />
        </div>
      </div>
      <h2 style={{ color: 'white' }}>Skills</h2>
      <div className='skills' ref={skillsRef}>
        <div>
          <h3>Development Skills</h3>
          <div className='devskills'>
            <b>Angular</b>: Expert<br />
            <b>React</b>: Intermediate<br />
            <b>Node</b>: Expert<br />
            <b>Express</b>: Intermediate<br />
            <b>HTML</b>: Expert<br />
            <b>CSS</b>: Intermediate<br />
          </div>
        </div>
        <div>
          <h3>Programming Languages</h3>
          <div className='languages'>
            <b>Java</b>: Expert<br />
            <b>Python</b>: Intermediate<br />
            <b>C</b>: Intermediate<br />
            <b>JavaScript</b>: Intermediate<br />
          </div>
        </div>
        <div>
          <h3>Database Management Systems</h3>
          <div className='dbms'>
            <b>MongoDB</b>: Intermediate<br />
            <b>SQL</b>: Intermediate<br />
          </div>
        </div>
        <div>
          <h3>Version Control</h3>
          <div className='version'>
            <b>Git</b>: Intermediate<br />
            <b>GitHub</b>: Intermediate<br />
          </div>
        </div>
      </div>
    </>
  );
}
