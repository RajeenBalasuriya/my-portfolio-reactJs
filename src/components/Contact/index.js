
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'



const Contact = ()=>{

    const refForm=useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_g86dapu', 'template_kq8x9ss', refForm.current, 'b3QO4qSh2njMMW50b')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
        }

    return(

        <>  

            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    </h1>
                    <p className='details'>
                    Thank you for visiting my portfolio website. I appreciate your interest in my work. 
                    Whether you have a project in mind, a collaboration proposal, or simply want to get in touch, I'd love to hear from you.
                    </p>
                </div>
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

          <div className="info-map">
          Rajeen Balasuriya,
          <br />
          Sri Lanka,
          <br />
          119/6 Ihala Imbulgoda <br />
          Imbulgoda <br />
          <br />
          <span>rajeenbalasuriya1@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[7.0464606, 79.9955861]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[7.0464606, 79.9955861]}>
              <Popup>Rajeen lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>

          
            </div>
            <Loader type='line-scale'/>
        
        </>

    )
}

export default Contact