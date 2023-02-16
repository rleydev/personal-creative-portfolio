import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.js';
import React, { useState, useEffect } from 'react';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 't', 'h', 'u', 'r']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
    // Replace the class with a new one after a delay
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters lettersClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters lettersClass={letterClass} strArray={jobArray} idx={22} />
                    <br />
                </h1>
                <h2>Frontend Dev </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home