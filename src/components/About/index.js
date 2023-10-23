import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState ,useEffect} from 'react'
import Loader from 'react-loaders'
import Photo from '../Photo'
import image from '../../assets/images/world.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../Modal/index'
import { Link } from 'react-router-dom';

const About = () => {
  const [letterClass] = useState('text-animate')
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="details">
            As an ambitious software engineering student at IIT, I've witnessed
            firsthand how technology has transformed the lives of thousands
            worldwide. With a passion for technology and a strong blend of
            interpersonal, hardworking, and technical skills, I'm eager to
            contribute to the software industry. I'm dedicated to building a
            better future for people around the world through innovation and
            technology.
          </p>

          <Photo imageUrl={image} className={'world'} />

          {isMobile ? (
            <Link to="/separate-page"><button className='save-button'>My Journey so far</button></Link>
          ) : (
            <motion.button
              className="save-button"
              onClick={() => (modalOpen ? close() : open())}
            >
              My Journey so far
            </motion.button>
          )}
        </div>

        <div className="window">
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
          </AnimatePresence>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  )
}

export default About
