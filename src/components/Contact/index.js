import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_c507hss',
            'template_0lw2mf4',
            refForm.current,
            'HydILqHneaCIhvOtT'
        ).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Filed to send the message! Please, try again!')
            }
        )
    }

    useEffect(() => {
        // Replace the class with a new one after a delay
            const timeout = setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
    
            return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        lettersClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                                </li>
                                <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                                </li>
                                <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                                </li>
                                <li>
                                <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Arthur Lee,
                    <br />
                    Kazakhstan, Almaty
                    <br />
                    <span>rley.dev@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[43.23, 76.88]} zoom={13}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.2186266, 76.893774]}>
                            <Popup>Current location</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            
            <Loader type="pacman" />
        </>
    )
}

export default Contact