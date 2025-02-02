import React, { useState } from 'react'
import './Login.css'
import { Container, Card, Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const apiKey = import.meta.env.VITE_API_URL
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (!email && !password) { setLoading(false) }
        else {
            try {
                const data = await axios.post(`${apiKey}/api/user/login`, { email, password })
                console.log(data);
                const user = data.data.data;
                const token = data.data.token

                localStorage.setItem("User", JSON.stringify(user))
                localStorage.setItem("token", JSON.stringify(token))
                navigate('/');  
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }
    }
    return (
        <>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button disabled={loading} variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
            </Card.Body>

        </>
    )
}

export default Login
