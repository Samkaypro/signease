import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Avatar from '../images/avatar.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Profile(props) {
  const name = localStorage.getItem('name');

  const logOut = () => {
    localStorage.removeItem('name');
    window.location.href = '/';
  };

  return (
    <Container className="d-flex flex-column align-items-center py-4" style={styles.container}>
      <Card style={styles.card}>
        <Card.Body className="text-center">
          <img src={Avatar} alt="Avatar" style={styles.avatar} />
          <Card.Title style={styles.title}>{name}</Card.Title>
          <Card.Text style={styles.text}>
            Level: Beginner
          </Card.Text>
          <Card.Text style={styles.text}>
            Progress: 0%
          </Card.Text>
          <div style={styles.buttonContainer}>
            <Button style={styles.button} href="/learningPage">Keep Learning</Button>
            <Button style={styles.signOutButton} onClick={logOut}><FontAwesomeIcon
              icon="sign-out-alt"
              style={{ backgroundColor: '#121212' }}
            />{' '}Sign out</Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={styles.statsCard}>
        <Card.Body className="text-center">
          <Card.Text style={styles.statsText}>Completed Lessons: 0</Card.Text>
          <Card.Text style={styles.statsText}>Total Time Spent: 0 hours</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

const styles = {
  container: {
    height: '100vh',
    paddingTop: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '16px',
    color: '#6c757d',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#121212',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  signOutButton: {
    backgroundColor: '#121212',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
  },
  statsCard: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  statsText: {
    fontSize: '16px',
    color: '#6c757d',
  },
};
