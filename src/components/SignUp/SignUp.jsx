import axios from 'axios';
import React, { useState } from 'react'
import { Container, Card, Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
const SignUp = () => {
    const apiKey = import.meta.env.VITE_API_URL
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (!name && !email && !password && !confirmPassword) { setLoading(false) }
        else {
            try {
                const data = await axios.post(`${apiKey}/api/user/signup`, { name, email, password })
                console.log(data);
                const user = data.data.data;
                const token = data.data.token

                localStorage.setItem("User", JSON.stringify(user))
                localStorage.setItem("token", JSON.stringify(token))
                history.push('/')
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
        <Card.Body>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Profile Pic</Form.Label>
                    <Form.Control type="file" onChange={(e) => setPic(e.target.files[0])} placeholder="Choose File" accept='image/' />
                </Form.Group>
                <Button disabled={loading} variant="primary" type="submit" className="w-100">
                    Sign Up
                </Button>
            </Form>
        </Card.Body>
    )
}

export default SignUp
