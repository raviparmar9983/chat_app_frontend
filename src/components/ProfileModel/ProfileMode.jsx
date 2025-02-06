import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

const ProfileMode = ({ show, handleClose, children, title }) => {
    return (
        <>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {children}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default ProfileMode
