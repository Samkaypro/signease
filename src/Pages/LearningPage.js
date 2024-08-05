import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Row, Col, Alert, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBackwardFast, FaForwardFast } from "react-icons/fa6";
import RealTimeHandSignVerifier from "../Components/RealTimeHandSignVerifier";
import "../Components/gameCard.css";

const tutorial = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z",
];

export function LearningPage() {
  const [position, setPosition] = useState(0);
  const [success, setSuccess] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const positionRef = useRef(position);

  const reset = () => {
		setSuccess(null);
	};

  useEffect(() => {
    positionRef.current = position;
    console.log("Updated positionRef:", positionRef.current);
  }, [position]);

  console.log("Current position:", position);

  const nextPosition = () => {
    if (positionRef.current < tutorial.length - 1) {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        console.log("Next position:", newPosition);
        return newPosition;
      });
      setSuccess(null); // Reset success state after moving to the next position
    }
  };

  const prevPosition = () => {
    if (positionRef.current > 0) {
      setPosition((prevPosition) => {
        const newPosition = prevPosition - 1;
        console.log("Previous position:", newPosition);
        return newPosition;
      });
      setSuccess(null); // Reset success state after moving to the previous position
    }
  };

  const handleSignDetected = (detectHandSign) => {
    if (isProcessing) return;
    setIsProcessing(true);

    if (detectHandSign.gestures.length > 0) {
      const result = detectHandSign.gestures.sort((a, b) => b.confidence - a.confidence)[0];

      console.log('Current letter:', tutorial[positionRef.current]);
      console.log('Detected sign:', result.name);

      if (result.name && result.name.toUpperCase() === tutorial[positionRef.current].toUpperCase()) {
        setSuccess(true);
        setTimeout(() => {
          
          setTimeout(() => {
            setIsProcessing(false);
            console.log('Processing reset after correct sign and delay');
          }, 5000); // 5 seconds delay
        }, 1000);
      } else {
        console.log('Detected sign does not match the current letter:', tutorial[positionRef.current]);
        setSuccess(false);
        setTimeout(() => {
          setIsProcessing(false);
          console.log('Processing reset after incorrect sign');
        }, 1000); // 1 second delay to prevent immediate reprocessing
      }
    } else {
      console.log('No gestures detected.');
      setTimeout(() => {
        setIsProcessing(false);
        console.log('Processing reset after no gestures detected');
      }, 1000); // 1 second delay to prevent immediate reprocessing
    }
  };

  useEffect(() => {
    setSuccess(null);
    reset();
    console.log('Current letter (useEffect):', tutorial[position]);
  }, [position]);

  return (
    <Container>
      <Row className="instructions">
        <h3>Sign Letter:</h3>
      </Row>
      <Row>
        <Col>
          <h3>{tutorial[position]}</h3>
        </Col>
      </Row>
      {success === true && <Alert variant="success">Great job! Press next to continue.</Alert>}
      {success === false && <Alert variant="danger">Wrong Sign! Try again.</Alert>}
      {success === null && <Alert style={{ visibility: "hidden" }}></Alert>}
      <Row style={{ justifyContent: "center", alignItems: "center" }} className="mb-3">
        <RealTimeHandSignVerifier onSignDetected={handleSignDetected} />
      </Row>
      <Row className="justify-content-around">
        <Button onClick={prevPosition} style={{ backgroundColor: "#121212" }}>
          <FaBackwardFast />
        </Button>
        <Button onClick={() => reset()} variant='success'>
					<FontAwesomeIcon icon='redo' />
          </Button>
        <Button disabled={!success} onClick={nextPosition} style={{ backgroundColor: "#121212" }}>
          <FaForwardFast />
        </Button>
      </Row>
      <Row style={{ justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
        <Col>
          <ProgressBar now={(position / tutorial.length) * 100} />
        </Col>
      </Row>
    </Container>
  );
}
