import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SideDrawer = () => {
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingChat, setLoadingChat] = useState()
    return (
        <>
            <Navbar className="bg-body-tertiary justify-content-between">
                <Form inline>
                    <Button type="button" variant='outline-secondary'>Search User</Button>
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
            );
        </>
    )
}

export default SideDrawer
