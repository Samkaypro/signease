import React from 'react';
import { Dictionary } from '../Components/dictionary';

export function DictionaryPage(props) {
	return (
		<>
			<h1 style={{padding: '15px'}}>ASL DICTIONARY</h1>
			<Dictionary/>
		</>
		
	);
}