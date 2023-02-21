import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { faGuitar, faImage, faMusic, faPaintBrush, faVideo } from '@fortawesome/free-solid-svg-icons';

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
        <>
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
                        I am passionate about visual products 
                        such as websites, videos, audio, graphic images.
                    </p>
                    <p>
                        I am confident quick learner, and constatnly working on my skills improvement. <br/><br />
                        Developer skills: HTML, CSS, JavaScript, Typescript, SASS/SCSS, React, Angular, Swift, UIKit, Git
                        Graphic software: Adobe Photoshop, Adobe Illustrator, Sketch, Figma, Adobe XD. <br />
                        Audio software: Cockos Reaper, IZotope RX Audio Editor, Audio Plugins. <br />
                        Video software: Final Cut Pro. 
                    </p>
                    <p>
                        Briefly about me, I am a creative tech-obsessed person!
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faGuitar} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faMusic} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faVideo} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faPaintBrush} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faAngular} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faReact} color='#EC4D48' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
        
    )
}

export default About