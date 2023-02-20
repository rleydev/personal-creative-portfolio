import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // Replace the class with a new one after a delay
            const timeout = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
    
            return () => clearTimeout(timeout);
        }, []);

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    lettersClass={letterClass}
                        strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                        idx={15} 
                    />
                </h1>
                <p>
                    I am very passionate about working on visual products 
                    such as websites, videos, graphic images.
                </p>
                <p>
                    I am confident quick learner, and constatnly working on my skills improvement
                </p>
                <p>
                    Briefly about me, I am a creative tech-obsessed person!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D48' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About