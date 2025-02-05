import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ChatProvider from '../../context/chat.provider'
import { useNavigate } from 'react-router-dom'
const AppLayout = () => {
    const [user, setUser] = useState({ _id: '', name: '', email: '', });
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('User'
        ))
        setUser(user)
        if (!user) {
            navigate('/auth/login')
        }
    }, [])
    return (
        <ChatProvider value={{ user, setUser }}>
            <Outlet />
        </ChatProvider>
    )
}

export default AppLayout
