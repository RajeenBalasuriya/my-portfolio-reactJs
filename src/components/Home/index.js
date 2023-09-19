import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s  .jpg'
import './index.scss'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Photo from './Photo';

const Home =()=>{
    
    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray=['a','j','e','e','n'];
    const jobArray=['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '(', 'U', 'G', ')'];

    return(

        <div className="container home-page">
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i</span>
                    <br/> 
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>  
                  <img src={LogoTitle} alt="devoloper"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Web devoloper / Mobile devoloper / IIT Undergraduate</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

            <Photo/>

            
            
            
            
        </div>
    );
}

export default Home