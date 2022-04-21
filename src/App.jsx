import React from 'react'
import Userlist from './components/Userlist/Userlist'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Userdetails from './components/Userdetails/Userdetails'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const App = () => {
    const [usersData, setUsersData] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            setUsersData(response.data)
        }
        fetchData();
    }, [])

    const onUserSelect = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='mt-5 container d-flex'>
            <Userlist data={usersData} onUserSelect={onUserSelect} />
            <Userdetails userData={selectedUser} />
        </div>
    )
}

export default App