import React from 'react'
import UserItem from '../UserItem/UserItem'
import "./userlist.scss"
import imgData from "./dummyAvatars.json"
import Loader from '../Loader/Loader'

const Userlist = ({ data, onUserSelect, isLoading, errorMessage }) => {
    return (
        <div className='userList'>
            <h4 className='title text-center'>USERS LIST</h4>
            <div className='content d-flex flex-column align-items-center justify-content-center'>
                {data.id === undefined ? data.map((user) => {
                    return (
                        <UserItem key={user.id} userData={user} onUserSelect={onUserSelect} avatar={imgData[user.id - 1].img} />
                    )
                }) : ''}
                {isLoading ? <Loader /> : ''}
                {errorMessage && <div className="error">{errorMessage}</div>}

            </div>
        </div>
    )
}

export default Userlist