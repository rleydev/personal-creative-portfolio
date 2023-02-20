import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.js';
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 't', 'h', 'u', 'r']
    const jobArray = ['m', 'e', 'd', 'i', 'a', ' ', 'c', 'r', 'e', 'a', 't', 'o', 'r', '.']

    useEffect(() => {
    // Replace the class with a new one after a delay
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
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
                    <h2>Frontend Developer/Video Editor/Graphic Designer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home