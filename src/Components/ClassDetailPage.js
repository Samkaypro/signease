import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import jsonData from '../data/class.json'; 
import './WordDetailPage.css';

const ClassDetailPage = () => {
	const location = useLocation();
	const history = useHistory();
	const queryParams = new URLSearchParams(location.search);
	const classTitle = queryParams.get('id');
	const classData = jsonData.data.find(item => item.title === classTitle);

	if (!classData) {
		return <div>No Class was Found</div>;
	}

	const handleBackClick = () => {
		history.push('/class'); 
	};

	return (
		<div className="word-detail-container">
			{/* <h1>{classData.title}</h1> */}
				{classData.list.map((instruction, index) => (
					<h1 key={index}>{instruction}</h1>
				))}
			<button onClick={handleBackClick} className="back-button">Back</button>
		</div>
	);
};

export default ClassDetailPage;
