import React, { useState } from "react";
import { Card, InputGroup, FormControl, Button, Container } from "react-bootstrap";

export function WelcomePage(props) {
  const [disabled, setDisabled] = useState(true);
  const [firstName, setFirstName] = useState('');

  const handleButton = (e) => {
    if (e.target.value.length > 0) {
      setDisabled(false);
      setFirstName(e.target.value);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = () => {
    props.loginProps(true);
    localStorage.setItem('name', firstName);
  };

  const cardStyle = {
    backgroundColor: '#121212',
    color: 'white',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#121212',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
  };

  const inputStyle = {
    borderRadius: '10px',
    borderColor: '#121212',
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Card style={cardStyle}>
        <h1>Welcomnnnne to Sign&Shoot</h1>
        <InputGroup>
          <FormControl
            placeholder="Please Enter your Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleButton}
            style={inputStyle}
          />
          <InputGroup.Append>
            <Button disabled={disabled} style={buttonStyle} onClick={handleSubmit}>
              Done
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card>
    </Container>
  );
}
