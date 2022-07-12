import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import LogoTitle from '../../assets/images/logo-s.png'
import LogoTitle from '../../assets/images/p.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home =() =>{
    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray=['a','s','i','n','d','u']
    const jobArray=['D','a','t','a',' ','S','c','i','e','n','t','i','s','t']

    useEffect(() => {
        return setTimeout( () => {
            setLetterClass ('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="logo-title" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} /> <br />

                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={21} />
                </h1>
                <h2>BackEnd Developer/Data Scientist</h2>
                <Link to="/contact"  className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
    
}

export default Home;