import React from 'react'
import "./userdetails.scss"
const Userdetails = ({ userData }) => {

    return (
        <div className='userDetails'>
            <h3 className='title text-center'>USER DETAILS</h3>
            <div className="main d-flex flex-column align-items-center">
                <div className='avatar'>

                </div>
                <div className="username">
                    {userData ? userData.profile.username : ''}
                </div>
                <div className="bio">
                    {userData ? userData.Bio : ''}
                </div>
                <div className='fullname d-flex flex-column'>
                    <div className="label">Full Name</div>
                    <div className="item">
                        {userData ? `${userData.profile.firstName} ${userData.profile.lastName}` : ''}
                    </div>
                </div>
                <div className="jobTitle d-flex flex-column">
                    <div className="label">Job Title</div>
                    <div className="item">
                        {userData ? userData.jobTitle : ''}
                    </div>
                </div>
                <div className="email d-flex flex-column">
                    <div className="label">Email</div>
                    <div className="item">
                        {userData ? userData.profile.email : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userdetails