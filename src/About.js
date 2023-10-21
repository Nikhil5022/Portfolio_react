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
        </>
    );
}
