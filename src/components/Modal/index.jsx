import { motion } from "framer-motion";
import MdoalContent from '../About/AboutFirst/index'


const dropIn={
    hidden:{
        y:'-100vh',
        opacity:0,
    },
    visible:{
        y:'0',
        opacity:1,
        transition:{
            duration:1,
            type:"sping",
            damping:25, 
            stiffness:500,
               },
    },
    exit:{
        y:'100vh',
        opacity:0,
        transition:{
            duration:1,
            type:"sping",
            damping:25, 
            stiffness:500,
               }
    }
}

const Modal=({handleClose,text})=>{

    return(
        
            <motion.div onClick={(e)=>e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                
                
                    <MdoalContent/>


                <motion.div
                
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="closediv"
                
                ><button onClick={handleClose} className="close">&#187;</button></motion.div>
                
            </motion.div>
        
    )

}

export default Modal
