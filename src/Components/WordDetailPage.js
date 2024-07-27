import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import jsonData from '../data/worddata.json'; 
import './WordDetailPage.css';

const WordDetailPage = () => {
	const location = useLocation();
	const history = useHistory();
	const queryParams = new URLSearchParams(location.search);
	const wordTitle = queryParams.get('id');
	const wordData = jsonData.data.find(item => item.title === wordTitle);

	if (!wordData) {
		return <div>Word not found</div>;
	}

	const handleBackClick = () => {
		history.push('/word'); 
	};

	return (
		<div className="word-detail-container">
			<h1>{wordData.title}</h1>
			<video
				src={wordData.image}
				loop
				autoPlay
				muted
				playsInline
				className="word-video"
			/>
			<ol>
				{wordData.list.map((instruction, index) => (
					<li key={index}>{instruction}</li>
				))}
			</ol>
			<button onClick={handleBackClick} className="back-button">Back to Words</button>
		</div>
	);
};

export default WordDetailPage;
