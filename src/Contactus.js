import React from 'react';
import './Contactus.css';
import linkedin from './Images/linkedin.gif';
import instagram from './Images/insta.gif';
import { useEffect,useRef } from 'react';

export default function ContactUs() {
    const contactRef = useRef(null);
    useEffect(() => {
        const options = {
          root: null, // Use the viewport as the root
          rootMargin: '0px',
          threshold: 0.1, // Trigger when 50% of the element is in the viewport
        };
        const intersectionCallback = (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
                if(entry.target === contactRef.current) {
                    contactRef.current.classList.add('active');
                    }
              observer.unobserve(entry.target);
            }
          });
        };
        const observer = new IntersectionObserver(intersectionCallback, options);
        observer.observe(contactRef.current);
      }, []);

    return (
        <div className="contact" ref={contactRef}>
            <h2>Contact Me</h2>
            <p>Feel free to get in touch for exciting opportunities or potential collaborations :</p>
            <ul>
                <li>
                    <strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=g.sainikhil95@gmail.com" rel="noreferrer" target='_blank'>g.sainikhil95@gmail.com</a>
                </li>
                <li>
                    <strong>Phone:</strong> 9703388553
                </li>
            </ul>

            <h2>Social</h2>
            <p>Connect with me on:</p>

            <div className='social'>
                <a href="https://www.linkedin.com/in/gubbala-sai-nikhil-633aa420b" rel="noreferrer" target='_blank'><img src={linkedin} alt="LinkedIn GIF" /></a>
                <a href="https://instagram.com/sainikhilgubbala?igshid=YTQwZjQ0NmI0OA==" rel="noreferrer" target='_blank'><img src={instagram} alt="Instagram GIF" /></a>
            </div>

            <p>
                I'm excited to bring my technical skills, creativity, and dedication to your next project. Let's create something remarkable together!
            </p>
        </div>
    );
}
