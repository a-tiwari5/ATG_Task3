import React from 'react'
import UserItem from '../UserItem/UserItem'
import "./userlist.scss"

const Loader = () => {
    return (
        <>
            <h1>Loader</h1>
            <h1>Loader</h1>
            <h1>Loader</h1>
        </>
    )
}

const Userlist = ({ data, onUserSelect }) => {
    return (
        <div className='userList'>
            <h4 className='title text-center'>USERS LIST</h4>
            <div className='content d-flex flex-column align-items-center justify-content-center'>
                {data.id === undefined ? data.map((user) => {
                    return (
                        <UserItem key={user.id} userData={user} onUserSelect={onUserSelect} />
                    )
                }) : <Loader />}
            </div>
        </div>
    )
}

export default Userlist