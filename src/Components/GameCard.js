import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container, Button, Row, Col, Card, Alert } from 'react-bootstrap';
import WebcamCapture from './WebcamCapture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBackwardFast, FaForwardFast } from "react-icons/fa6";
import api from '../utils/api';
import './gameCard.css';

export default function GameCard(props) {
	const { letter, position, total, next, prev, picture } = props;

	const [activateWebcam, setActivateWebcam] = useState(true);
	const [success, setSuccess] = useState(null);

	const reset = () => {
		setActivateWebcam(false);
		setSuccess(null);
		setTimeout(() => {
			setActivateWebcam(true);
		}, 0);
	};

	const handleUpload = async (image) => {
		const res = await api(image, letter);
		console.log("Detected Letter:", res); // Log the detected letter
		if (res && res.toUpperCase() === letter.toUpperCase()) {
			setSuccess(true);
			setTimeout(() => {
				next();
			}, 1000); // Automatically move to the next letter after 1 second
		} else {
			setSuccess(false);
		}
	};

	React.useEffect(() => {
		reset();
	}, [letter]);

	return (
		<Container>
			<Row className='instructions'>
				<h3>Sign the following letter:</h3>
			</Row>
			<Row>
				<Col>
					<h1>{letter}</h1>
				</Col>
			</Row>
			{success === true && (
				<Alert variant='success'>Great job!</Alert>
			)}
			{success === false && (
				<Alert variant='danger'>Try again!</Alert>
			)}
			{success !== true && success !== false && (
				<Alert style={{visibility:'hidden'}}></Alert> // placeholder for success status, should not be visible
			)}
			<Row
				style={{ justifyContent: 'center', alignItems: 'center' }}
				className='mb-3'>
				{activateWebcam && (
					<WebcamCapture
						size='250'
						photoProcessor={handleUpload}
						status={success}
					/>
				)}
        {picture ? <Card className="ml-3 mt-2 mt-sm-0"> <img alt='' src={picture}/>  </Card>: <></>}
			</Row>
			<Row className='justify-content-around'>
				<Button onClick={() => prev()} style={{ backgroundColor: '#121212' }}>
					<FaBackwardFast />
				</Button>
				<Button onClick={() => reset()} variant='success'>
					<FontAwesomeIcon icon='redo' />
				</Button>
				<Button
					disabled={!success}
					onClick={() => next()}
					style={{ backgroundColor: '#121212' }}>
					<FaForwardFast />
				</Button>
			</Row>
			<Row
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '1rem',
				}}>
				<Col>
					<ProgressBar now={(position / total) * 100} />
				</Col>
			</Row>
		</Container>
	);
}
