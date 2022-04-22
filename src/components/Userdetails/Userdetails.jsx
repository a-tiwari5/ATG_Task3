import React from 'react'
import "./userdetails.scss"
import imgData from "../Userlist/dummyAvatars.json"
const Userdetails = ({ userData }) => {
    return (
        <div className='userDetails'>
            <h3 className='title text-center'>USER DETAILS</h3>
            <div className="main d-flex flex-column align-items-center">
                {
                    !userData ? <div className='avatar'></div> : <img className='imgAvatar' src={imgData[userData.id - 1].img} alt="" />
                }
                <div className="username">
                    {userData ? userData.profile.username : 'No data available'}
                </div>
                <div className="bio">
                    {userData ? userData.Bio : 'No data available'}
                </div>
                <div className='fullname d-flex flex-column'>
                    <div className="label">Full Name</div>
                    <div className="item">
                        {userData ? `${userData.profile.firstName} ${userData.profile.lastName}` : 'No data available'}
                    </div>
                </div>
                <div className="jobTitle d-flex flex-column">
                    <div className="label">Job Title</div>
                    <div className="item">
                        {userData ? userData.jobTitle : 'No data available'}
                    </div>
                </div>
                <div className="email d-flex flex-column">
                    <div className="label">Email</div>
                    <div className="item">
                        {userData ? userData.profile.email : 'No data available'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetails