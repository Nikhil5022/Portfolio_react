import React from 'react'
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
                    </div>
                    <div className="picture">
                        <img src={bgImage} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
