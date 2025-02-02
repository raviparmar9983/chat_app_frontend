import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Chat = () => {
    const [chat, setChat] = useState([])
    const apiKey = import.meta.env.VITE_API_URL
    const fetchChats = async () => {
        const data = await axios.get(`${apiKey}/api/chat`)
        setChat(data.data.data)
    }
    useEffect(() => {
        fetchChats()
    }, [])
    return (
        <div>
            {JSON.stringify(chat)}
        </div>
    )
}

export default Chat
