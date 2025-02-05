import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChatState } from '../../context/chat.provider'
import { Col, Container, Row } from 'react-bootstrap'
import SideDrawer from '../SideDrawer/SideDrawer'
import MyChat from '../MyChat/MyChat'
import ChatBox from '../ChatBox/ChatBox'

const Chat = () => {
    const { user } = ChatState()
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
            {user && <SideDrawer />}
            <Container fluid class="h-100 w-100">
                <Row>
                    <Col sm={4}>
                        <MyChat />
                    </Col>
                    <Col sm={8}>
                        <ChatBox />
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Chat
