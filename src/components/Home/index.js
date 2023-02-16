import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi, <br /> I'm 
                    <img src={LogoTitle} alt="developer" />
                    rthur
                    <br />
                    web dev
                </h1>
                <h2>Frontend Dev </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home