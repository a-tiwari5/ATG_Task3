import React from 'react'
import "./useritem.scss"

const UserItem = ({ userData, onUserSelect }) => {
    return (
        <div className='userItem d-flex align-items-center' onClick={() => { onUserSelect(userData) }}>
            <div className='img'>

            </div>
            <div className="username">{userData ? `${userData.profile.firstName} ${userData.profile.lastName}` : ''}</div>
        </div>
    )
}

export default UserItem