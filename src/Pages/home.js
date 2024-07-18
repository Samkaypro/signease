import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Button, Container, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCog } from 'react-icons/fa';
import Logo from "../Components/Logo";
import Avatar from "../images/avatar.jpeg";

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
    padding: '19px',
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
            <Accordion defaultActiveKey="0">
              <div style={styles.banner}>
                <Accordion.Toggle as="div" eventKey="0" style={styles.header}>
                  American Sign Language
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <div style={styles.body}>
                    <Link to="/tutorial" style={styles.link}>
                      <Button style={styles.button}>
                        Tutorial
                      </Button>
                    </Link>
                    <Link to="/learningPage" style={styles.link}>
                      <Button style={styles.button}>
                        Play game
                      </Button>
                    </Link>
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>

            <div className="my-4">

            </div>

            {/* Additional Content */}
            <Card style={styles.card}>
              <Card.Body>
                <Link to="/tutorial" style={styles.link}>
                <Card.Title>Tutorial</Card.Title>
                <Card.Text>
                  Learn how to sign Alphabet<br />
                  from letter A to Z with a guide.
                </Card.Text>
                </Link>
              </Card.Body>
            </Card>
            <Card style={styles.card}>
              <Card.Body>
                <Link to="/learningPage" style={styles.link}>
                <Card.Title>Play game</Card.Title>
                <Card.Text>
                  Sign the ASL language<br />
                  from letter A to Z without <br />
                  a guide to earn xp.
                </Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </>
        )}
        {!loggedIn && (
          <div style={styles.welcomeContainer}>
            <div className="display-4">Welcome to</div>
            <div style={styles.logoContainer}>
              <Logo />
              <span style={styles.logoText}>SignEase</span>
            </div>
            <div className="fs-3 my-2">What's your name?</div>
            <FormControl
              className="my-2"
              placeholder="Enter your name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleButton}
              style={styles.input}
            />
            <Button disabled={disabled} onClick={handleSubmit} style={styles.nextButton}>
              Next
            </Button>
          </div>
        )}
      </Container>
    </>
  );
}

const styles = {
  banner: {
    margin: '0px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    backgroundColor: '#121212',
    color: 'white',
    padding: '15px',
    textAlign: 'center',
    fontSize: '21px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  body: {
    padding: '20px',
    backgroundColor: '#121212',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    color: '#121212',
    border: 'none',
    borderRadius: '40px',
    padding: '10px 20px',
    margin: '10px',
    fontSize: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#121212',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logoText: {
    color: '#6800F4',
    marginLeft: '0.4em',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    margin: '10px auto',
    padding: '10px',
    borderRadius: '10px',
    borderColor: '#121212',
  },
  nextButton: {
    backgroundColor: '#121212',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
  },
  card: {
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },

};

export default Home;
