import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s  .jpg'
import './index.scss'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Photo from '../Photo';
import Loader from 'react-loaders';
import '../Photo/index.scss'
import image from '../../assets/images/me.png'

const Home =()=>{
    
    const [letterClass]=useState('text-animate')
    const nameArray=['a','j','e','e','n'];
    const jobArray=['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '(', 'U', 'G', ')'];
    

    return(
        <>
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

            <Photo imageUrl={image} className={'photo-container'}/>

            
            
            
            
        </div>
        <Loader type='line-scale'/>
        </>
    );
}

export default Home