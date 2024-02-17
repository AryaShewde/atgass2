import React, { useState } from 'react'
import avatar from "../avatar/avatar.jpg"
// import More from './More';

const User = ({ sendDataToParent, user, onSelect, index }) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    const [aavatar, setAavatar] = useState(null);
    const handleImageError = () => {
        setImageLoaded(false);
    };
    const handlepushdet = () => {
        setAavatar(user.avatar)
        sendDataToParent(aavatar)
        onSelect(index)
    }
    const select = ()=>{
        onSelect(index)
    }
    const click = ()=>{
        handlepushdet();
        select();
    }
    return (
        <div>
             <div className="d-flex w-100"> 
                <div className='d-flex my-2'>
                    {imageLoaded ? (
                        <img className='imglist rounded-circle' src={user.avatar} alt="" onError={handleImageError} />
                    ) : (
                        <img className='imglist rounded-circle' src={avatar} alt="Default" />
                    )}
                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1 className='namelist fw-bold'>{user.profile.firstName} {user.profile.lastName}</h1>
                        <button className='fw-bold border border-0 bg-transparent text-primary btn' id='myButton' onClick={click}>Double tap to Know More...</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default User
