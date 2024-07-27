import React from 'react';
import { Dictionary } from '../Components/dictionary';

export function DictionaryPage(props) {
	const topPad = {
		paddingTop: '40px',
		textAlign: 'center'
	};

	return (
		<>
			<div style={topPad}>
				<h2>ASL DICTIONARY</h2>
			</div>
			<Dictionary />

		</>


	);
}