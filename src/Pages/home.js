import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  FormControl,
  Button,
  Container,
  Accordion,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCog } from 'react-icons/fa';
import Logo from "../Components/Logo";
import Avatar from "../images/avatar.jpeg"

export function Home() {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [firstName, setFirstName] = useState('');

  const handleButton = e => {
    if (e.target.value.length > 0) {
      setDisabled(false);
      setFirstName(e.target.value);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('name', firstName);
    setName(firstName);
    setLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem('name');
  };

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('name')) {
      setLoggedIn(true);
      setName(localStorage.getItem('name'));
    }
  }, []);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    background: 'white',
    padding: '4px',
    zIndex: 100,
  };

  const avatarStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const avatarImgStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const greetingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const settingsStyle = {
    fontSize: '24px',
    cursor: 'pointer',
  };

  return (
    <>
      <Container className="py-4">
        {loggedIn && (
          <>
            <div style={headerStyle}>
              <div style={avatarStyle}>
                <img src={Avatar} alt="Avatar" style={avatarImgStyle} />
              </div>
              <div style={greetingStyle}>Welcome {name}!</div>
              <div style={settingsStyle}>
                <FaCog />
              </div>
            </div>
            <div className="my-2">Select your language:</div>
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  American Sign Language
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Link to="/learningPage" className="mr-2">
                      <Button style={{ backgroundColor: '#6800F4' }}>
                        Learn
                      </Button>
                    </Link>
                    <Link to="/tutorial">
                      <Button style={{ backgroundColor: '#6800F4' }}>
                        Tutorial
                      </Button>
                    </Link>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <div className="my-4">
              <Button
                style={{ backgroundColor: '#6800F4' }}
                onClick={logOut}
                href="/"
              >
                <FontAwesomeIcon
                  icon="sign-out-alt"
                  style={{ backgroundColor: '#6800F4' }}
                />{' '}
                Sign out
              </Button>
            </div>
          </>
        )}
        {!loggedIn && (
          <>
            <div className="display-4"></div>
            <div className="display-4">Welcome to</div>
            <div className="display-4 text-primary">
              <div style={{ color: "#6800F4" }}>
                <Logo />
                <span style={{ marginLeft: '0.4em' }}>SignEase</span>
              </div>
            </div>
            <div className="fs-3 my-2">What's your name?</div>
            <FormControl
              className="my-2"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleButton}
            />
            <Button disabled={disabled} variant="outline-primary" onClick={handleSubmit}>Next</Button>
          </>
        )}
      </Container>
    </>
  );
}
