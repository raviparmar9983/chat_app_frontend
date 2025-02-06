import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileMode from '../ProfileModel/ProfileMode';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SideDrawer = () => {
    const apiKey = import.meta.env.VITE_API_URL
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState()
    const navigate = useNavigate();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            if (!token) navigate('/auth/login');
            const data = await axios.get(`${apiKey}/api/user`, { headers: { Authorization: `Bearer ${token.accessToken}` } })
            setSearchResult(data.data.data)
            if (data.status == 400) navigate('/auth/login')
        }
        catch (err) {
            console.log(err)
            if (err.status == 400) navigate('/auth/login')
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Navbar className="bg-body-tertiary justify-content-between">
                <Form inline>
                    <Button type="button" onClick={handleShow} variant='outline-secondary'>Search User</Button>
                </Form>
                <Form inline class='w-75'>
                    <Row >
                        <Col >
                            <h3>Talsk</h3>
                        </Col>
                        <Col xs="auto">profile
                        </Col>
                    </Row>
                </Form>
            </Navbar>
            <ProfileMode show={show} title={'Search User'} handleClose={handleClose} >
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                onClick={(e) => setSearch(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" onClick={handleSearch}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
                <Container>
                    <Row>
                        <ListGroup variant="flush">
                            {searchResult.map((search) => (
                                <ListGroup.Item key={search._id}>
                                    {search.name} ({search._id})
                                </ListGroup.Item>
                            ))
                            }
                        </ListGroup>

                    </Row>
                </Container>
            </ProfileMode>

        </>
    )
}

export default SideDrawer
