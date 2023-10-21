import React from 'react'
import Typed from 'react-typed';
import './About.css';
import bgImage from './Images/bg.png';


export default function Home() {
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
                        <Typed
                            strings={[
                                'Full Stack Developer.',
                                'Software Engineer.',
                                'Web Developer.',
                            ]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                            className="typed-text"
                        />
                    </div>
                    <div className="picture">
                        <img src={bgImage} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
