import React, { useEffect , useState} from 'react';
import { Button } from 'react-bootstrap';

export function Profile(props) {
	return (
		<>
			<h1>Profile Page</h1>
			<h2>Hello</h2>
			THis is the profile page 
			<Button style={{ backgroundColor: '#6800F4' }} href="/learningPage">Keep Learning</Button>
		</>
	);
}
