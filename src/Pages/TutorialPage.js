import React, { useState, useEffect, useRef } from 'react';
import { Container, Button, Row, Col, Card, Alert, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBackwardFast, FaForwardFast } from 'react-icons/fa6';
import RealTimeHandSignVerifier from '../Components/RealTimeHandSignVerifier';
import alphabet from '../Components/abc-pics'; // Make sure this import is correct
import '../Components/gameCard.css';

const tutorial = [
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
	"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
	"U", "V", "W", "X", "Y", "Z",
];

export function TutorialPage() {
	const [position, setPosition] = useState(0);
	const [success, setSuccess] = useState(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const positionRef = useRef(position);

	const reset = () => {
		setSuccess(null);
	};

	useEffect(() => {
		positionRef.current = position;
	}, [position]);

	const nextPosition = () => {
		if (position < tutorial.length - 1) {
			setPosition(position + 1);
		}
	};

	const prevPosition = () => {
		if (position > 0) {
			setPosition(position - 1);
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
					//nextPosition();
					setIsProcessing(false);
				}, 1000);
			} else {
				console.log('Detected sign does not match the current letter:', tutorial[positionRef.current]);
				setSuccess(false);
				setIsProcessing(false);
			}
		} else {
			console.log('No gestures detected.');
			setIsProcessing(false);
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
					<h1>{tutorial[position]}</h1>
				</Col>
			</Row>
			{success === true && <Alert variant="success">Great job! Press next to continue.</Alert>}
			{success === false && <Alert variant="danger">Wrong Sign! Try again.</Alert>}
			{success === null && <Alert style={{ visibility: "hidden" }}></Alert>}
			<Row style={{ justifyContent: "center", alignItems: "center" }} className="mb-3">
				<RealTimeHandSignVerifier onSignDetected={handleSignDetected} />
				<Card className="ml-3 mt-2 mt-sm-0"> <img alt='' src={alphabet[position].src} />  </Card>
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
