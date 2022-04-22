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
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const response = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            setUsersData(response.data)
        }
        fetchData()
            .then(() => {
                setIsLoading(false)
            })
            .catch(() => {
                setErrorMessage("Unable to fetch user list");
                setIsLoading(false);
            });
    }, [])

    const onUserSelect = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='mt-5 container d-flex'>
            <Userlist data={usersData} onUserSelect={onUserSelect} isLoading={isLoading} errorMessage={errorMessage} />
            <Userdetails userData={selectedUser} />
        </div>
    )
}

export default App