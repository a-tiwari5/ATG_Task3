import React from 'react'
import "./useritem.scss"

const UserItem = ({ userData, onUserSelect, avatar }) => {
    return (
        <div className='userItem d-flex align-items-center' onClick={() => { onUserSelect(userData) }}>
            <img src={avatar} alt="" />
            <div className="username">{userData ? `${userData.profile.firstName} ${userData.profile.lastName}` : ''}</div>
        </div>
    )
}

export default UserItem