import React, { useState } from 'react';
import alphabet from './abc-pics';  // Importing the alphabet images
import GameCard from './GameCard';    // Importing the GameCard component

const tutorial = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I",
  "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z",
];

export function Tutorial() {
  const [position, setPosition] = useState(0);  // State to track current letter position

  const nextPosition = () => {
    if (position < tutorial.length - 1) {
      setPosition(position + 1);  // Increment position
    }
  };

  const prevPosition = () => {
    if (position > 0) {
      setPosition(position - 1);  // Decrement position
    }
  };

  return (
    <>
      <GameCard
        letter={tutorial[position]}  // Current letter
        position={position}          // Current position
        total={tutorial.length - 1}  // Total number of letters
        next={nextPosition}          // Function to go to the next letter
        prev={prevPosition}          // Function to go to the previous letter
        picture={alphabet[position].src} // Image source from alphabet
      />
    </>
  );
}
