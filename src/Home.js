import React from 'react'
import './About.css';
import bgImage from './Images/bg.png';
import Typed from 'typed.js';


export default function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>Full Stack Developer.</i>', '<i>Web Developer.</i>', '<i>Software Engineer.</i>'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <>
            <div className='animate'>
                <div className="about">
                    <div className="content">
                        <h2 style={{ color: 'white' }}>
                            Hi, My name is <span style={{ color: '#aa6be4' }}>Sai Nikhil</span>.{' '}
                            <br />
                            <br />
                            I am a passionate{' '}
                        </h2>{' '}
                        <br />
                        <h2 className='typed' style={{ color: '#aa6be4' }}>
                            <span ref={el} />
                        </h2>
                    </div>
                    <div className="picture">
                        <img src={bgImage} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
