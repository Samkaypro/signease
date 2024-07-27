import React from 'react';
import { Link } from 'react-router-dom';
import jsonData from '../data/class.json'; 
import './WordPage.css';

const Class = () => {
  return (
    <div className="word-container">
      <h2>CLASSROOM</h2>
      {jsonData.data.map((item, index) => (
        <div className="word-box" key={index}>
          <Link to={`/class/detail?id=${item.title}`}>
            <h4>{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Class;
