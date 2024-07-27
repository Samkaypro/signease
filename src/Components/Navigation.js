import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import { Navbar, Nav, } from 'react-bootstrap';
import { CgProfile } from "react-icons/cg";
import { LuBookOpen } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MyVerticallyCenteredModal } from './ModalDictionary';


export function Navigation() {
    const [modalShow, setModalShow] = useState(false);

    return (<>
        {/* <Form inline className="fixed-bottom" style={{marginBottom:"5rem"}}>
        <Button variant="outline-info">Dictionary</Button>
    </Form> */}
        <Navbar style={{ backgroundColor: '#121212', color: 'white' }} fixed="bottom" >
            {/* <Navbar.Brand href="/">LOGO</Navbar.Brand> */}
            <Nav className="d-flex justify-content-around py-2 container">
                <Link to='/' className="d-flex flex-column align-items-center" style={{ color: '#F8F8F8' }}>
                    <IoHomeOutline size="2rem" />
                    <div className="d-none d-md-block" style={{ fontWeight: 'bold' }}>HOME</div>
                </Link>
                <Link to='/word' className="d-flex flex-column align-items-center" style={{ color: '#F8F8F8' }}>
                    {/* <img alt='' style={{height:"2rem"}} src="/Logos-White.svg"/> */}
                    <HiOutlineLightBulb size="2rem" />
                    <div className="d-none d-md-block" style={{ fontWeight: 'bold' }}>WORD</div>
                </Link>
                <Link to='/dictionary' className="d-flex flex-column align-items-center" style={{ color: '#F8F8F8' }}>
                    <LuBookOpen size="2rem" />
                    <div className="d-none d-md-block" style={{ fontWeight: 'bold' }}>DICTIONARY</div>
                </Link>
                <Link to='/class' className="d-flex flex-column align-items-center" style={{ color: '#F8F8F8' }}>
                    <SiGoogleclassroom size="2rem"/>
                    <div className="d-none d-md-block" style={{ fontWeight: 'bold' }}>CLASS</div>
                </Link>
                <Link to='/profile' className="d-flex flex-column align-items-center" style={{ color: '#F8F8F8' }}>
                    <CgProfile size="2rem" />
                    <div className="d-none d-md-block" style={{ fontWeight: 'bold' }}>PROFILE</div>
                </Link>
            </Nav>
        </Navbar>

        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />


    </>)
}
