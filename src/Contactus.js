import React from 'react';
import './Contactus.css';
import linkedin from './Images/linkedin.gif';
import instagram from './Images/insta.gif';

export default function ContactUs() {
    return (
        <div className="contact">
            <h2>Contact</h2>
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
