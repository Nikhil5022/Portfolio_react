import './About.css';
import wipro from './Images/wipro.jpg';
import ebox from './Images/ebox.jpg'
import me from './Images/me.jpg';
export default function About() {
    return (

        <>
            <div className="aboutme">
                <h2 style={{ color: 'white' }}>ABOUT ME</h2>
                <br />
                <div className='details'>
                    <img src={me} alt="MyPhoto" />
                    <p>Hello, I'm G. Sai Nikhil, a full-stack developer with a passion for crafting innovative solutions in the dynamic IT sector. I thrive on challenges and am dedicated to contributing my technical expertise and problem-solving skills to the world of software engineering.</p>
                </div>

            </div>
            <br /><br />
            <div className='achievements'>
                <h2 style={{ color: 'white', fontSize: '2rem' }}>Achievements</h2>
                <div className='first'>
                    <img src={wipro} alt="wipro certificate" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat nam quia voluptas non? Beatae, natus repudiandae. Voluptatum velit molestias ab mollitia beatae expedita, vero voluptate ex aut aspernatur inventore?</p>
                </div>
                <div className='second'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat nam quia voluptas non? Beatae, natus repudiandae. Voluptatum velit molestias ab mollitia beatae expedita, vero voluptate ex aut aspernatur inventore?</p>
                    <img src={ebox} alt="ebox certificate" />
                </div>
            </div>
            <h2 style={{color:'white'}}>Skills</h2>
            <div className='skills'>
                <div>
                    <h3>Development Skills</h3>
                    <div className='devskills'>
                        <b>Angular</b>:Expert<br />
                        <b>React</b>:Intermediate<br />
                        <b>Node</b>:Expert<br />
                        <b>Express</b>:Intermediate<br />
                        <b>HTML</b>:Expert<br />
                        <b>CSS</b>:Intermediate<br />
                    </div>
                </div>
                <div>
                    <h3>Programming Languages</h3>
                    <div className='languages'>
                        <b>Java</b>:Expert<br />
                        <b>Python</b>:Intermediate<br />
                        <b>C</b>:Intermediate<br />
                        <b>Java Script</b>:Intermediate<br />
                    </div>
                </div>
                <div>
                    <h3>Database Management Systems</h3>
                    <div className='dbms'>
                        <b>MongoDB</b>:Intermediate<br />
                        <b>SQL</b>:Intermediate<br />
                    </div>
                </div>
                <div>
                    <h3>Version Control</h3>
                    <div className='version'>
                        <b>Git</b>:Intermediate<br />
                        <b>GitHub</b>:Intermediate<br />
                    </div>
                </div>
            </div>
        </>
    );
}
