import React from 'react';
import './index.scss';

const Photo = ({ imageUrl,className }) => {
    return (
        <div className={className}>
            <img className='profile-photo' src={imageUrl} alt="Profile" />
        </div>
    );
};

export default Photo;