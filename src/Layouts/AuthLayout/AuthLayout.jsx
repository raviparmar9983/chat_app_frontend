import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Container, Card, Form, Button, Nav } from "react-bootstrap";

const AuthLayout = () => {
    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <Card style={{ width: "350px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <Card.Header >
                    <Nav variant="tabs" >
                        <Nav.Item className='w-50 text-center'>
                            <NavLink to="login" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >Login</NavLink>
                        </Nav.Item>
                        <Nav.Item className='w-50 text-center'>
                            <NavLink to="signup" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                            >Sign Up</NavLink>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Outlet />
            </Card>
        </Container>

    );
};

export default AuthLayout
