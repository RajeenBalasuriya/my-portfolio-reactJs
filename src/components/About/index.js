import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loader from 'react-loaders';
import Photo from '../Photo';
import image from '../../assets/images/world.jpg'



const About=()=>{
    const [letterClass]=useState('text-animate')
 
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                 </h1>
                 <p className='details'>
                 As an ambitious software engineering student at IIT, 
                 I've witnessed firsthand how technology has transformed the lives of thousands worldwide.
                 With a passion for technology and a strong blend of interpersonal, hardworking, and technical skills, 
                 I'm eager to contribute to the software industry. 
                 I'm dedicated to building a better future for people around the world through innovation and technology.
                 </p>
                 

                 <Link to="/seemore" className='flat-button'>My Journy So Far</Link>
                 <Photo imageUrl={image} className={'world'} />
            </div>
            
                
           

            
        </div>
        <Loader type='line-scale'/>
        </>
        )
}

export default About