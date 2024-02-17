import React, { useState } from 'react'
import User from './User';
import avatar from "../avatar/avatar.jpg"

const Users = ({ users, errormess }) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    // const [aavataree, setAavataree] = useState();
    const [existdata, setExistdata] = useState(false);
    const ReceiveDataFromChild = (aavatar) => {
        if (aavatar !== null) {
            // setAavataree(aavatar)
            setExistdata(true)
            setImageLoaded(true);
        }
    };
    const handleImageError = () => {
        setImageLoaded(false);
    };
    const [selectedOpportunity, setSelectedOpportunity] = useState(0);

    const handleOpportunitySelect = (index) => {
        setSelectedOpportunity(index);
    };
    const data = users[selectedOpportunity]
    return (
        <div className='d-flex w-100 holeapp gap-4'>
            <div className='first bg-white p-3 w-100 rounded shadow'>
                <h2>Users</h2>
                <hr />
                {users && users.map((user, index) => (
                    <User index={index} key={user.createdAt} user={user} sendDataToParent={ReceiveDataFromChild} onSelect={handleOpportunitySelect}/>
                ))}
                {errormess ? <h1>No data to show</h1> : ""}
            </div>
            <div className=' shadow second bg-primary-subtle p-3 border-start border-white border-5 rounded flex-column'>
                <div>
                    <p className='fs-4'>Details</p>
                    <hr />
                </div>
                {existdata ? <div className='overflow-y-auto'>
                    {imageLoaded ? (
                        <img className='imglist rounded-circle' src={data.avatar} alt="" onError={handleImageError} />
                    ) : (
                        <img className='imglist rounded-circle' src={avatar} alt="Default" />
                    )}
                    <p className='fw-bolder fs-5'>User Name : <span className='fw-bold fs-6 text-dark text-opacity-75'>{data.profile.username}</span></p>
                    <p className='fw-bolder fs-5'>Bio : <span className='fw-bold fs-6 text-dark text-opacity-75'>{data.Bio}</span></p>
                    <p className='fw-bolder fs-5'>JobTitle : <span className='fw-bold fs-6 text-dark text-opacity-75'>{data.jobTitle}</span></p>
                    <p className='fw-bolder fs-5'>First Name : <span className='fw-bold fs-6 text-dark text-opacity-75'>{data.profile.firstName}</span></p>
                    <p className='fw-bolder fs-5'>Last Name : <span className='fw-bold fs-6 text-dark text-opacity-75'>{data.profile.lastName}</span></p>
                    <p className='fw-bolder fs-5'>Email Id : <span className='fw-bold fs-6 text-dark text-opacity-75'>{data.profile.email}</span></p>
                </div> :
                    <div className='text-center w-100'>
                        <h2 className='text-black-50'>No Data</h2>
                    </div>}

            </div>
        </div>
    )
}

export default Users
