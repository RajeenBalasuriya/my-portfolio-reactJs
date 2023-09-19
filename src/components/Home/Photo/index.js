import './index.scss'
import myImage from '../../../assets/images/me.png'

const Photo=()=>{
    return(
        <div className='photo-container'>
            <img  className='profile-photo' src={myImage}/>
        </div>
    )
}

export default Photo