import { motion } from "framer-motion";


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
                <p>saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    saffffffffffffffffas
                    afsssssssssssssssssssssssssssssssssssss
                    asggggggggggggggggggggggggggggggggggg
                </p>
                <button onClick={handleClose} className="close">Close</button>
            </motion.div>
        
    )

}

export default Modal