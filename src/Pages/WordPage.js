import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../data/worddata.json'; 
import './WordPage.css';

const WordPage = () => {
  return (
    <div className="word-container">
      <h2>WORD DICTIONARY</h2>
      {jsonData.data.map((item, index) => (
        <div className="word-box" key={index}>
          <Link to={`/word/detail?id=${item.title}`}>
            <h4>{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WordPage;
