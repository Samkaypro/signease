import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Card, Alert, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBackwardFast, FaForwardFast } from "react-icons/fa6";
import RealTimeHandSignVerifier from "./RealTimeHandSignVerifier";
import "./gameCard.css";

export default function GameCard(props) {
	const { letter, position, total, next, prev, picture } = props;
	const [success, setSuccess] = useState(null);

	const handleSignDetected = (detectHandSign) => {
		if (detectHandSign.gestures.length > 0) {
			const result = detectHandSign.gestures.sort(
				(a, b) => b.confidence - a.confidence
			)[0];
			
			console.log('Current letter:', letter); // Log the current letter
			console.log('Detected sign:', detectHandSign.gestures[0].name); // Log the detected sign
			
			if (detectHandSign.gestures[0].name && detectHandSign.gestures[0].name.toUpperCase() === letter.toUpperCase()) {
				setSuccess(true);
				setTimeout(() => {
					next();
				}, 1000);
				console.log('Detected sign matched with current letter:', letter);
			} else {
				console.log('Detected sign does not match the current letter:', letter);
				setSuccess(false);
			}
			return result;
		}
	};

	useEffect(() => {
		setSuccess(null);
		console.log('Current letter (useEffect):', letter); // Log the current letter whenever it changes
	}, [letter]);

	return (
		<Container>
			<Row className="instructions">
				<h3>Sign the following letter:</h3>
			</Row>
			<Row>
				<Col>
					<h1>{letter}</h1>
				</Col>
			</Row>
			{success === true && <Alert variant="success">Great job!</Alert>}
			{success === false && <Alert variant="danger">Try again!</Alert>}
			{success === null && <Alert style={{ visibility: "hidden" }}></Alert>}
			<Row style={{ justifyContent: "center", alignItems: "center" }} className="mb-3">
				<RealTimeHandSignVerifier onSignDetected={handleSignDetected} />
				{picture && (
					<Card className="ml-3 mt-2 mt-sm-0">
						<img alt="" src={picture} />
					</Card>
				)}
			</Row>
			<Row className="justify-content-around">
				<Button onClick={prev} style={{ backgroundColor: "#121212" }}>
					<FaBackwardFast />
				</Button>
				<Button disabled={!success} onClick={next} style={{ backgroundColor: "#121212" }}>
					<FaForwardFast />
				</Button>
			</Row>
			<Row style={{ justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
				<Col>
					<ProgressBar now={(position / total) * 100} />
				</Col>
			</Row>
		</Container>
	);
}
