'use client';

import React, { useState } from 'react';
type ResultType = {
  X: number[];
  O: number[];
};
const page = () => {
  const [currentState, setCurrrentState] = useState<ResultType>({
    X: [],
    O: [],
  });
  const [prevMove, setPrevMove] = useState<'X' | 'O' | null>(null);
  const handleBoxClick = (index: number) => {
    if (currentState.X.includes(index) || currentState.O.includes(index)) {
      alert('Not Allowed Move');
      return;
    }
    setCurrrentState((prevState) => {
      const newState = { ...prevState };
      if (prevMove === null || prevMove === 'O') {
        newState.X.push(index);
        setPrevMove('X');
      } else {
        newState.O.push(index);
        setPrevMove('O');
      }
      return newState;
    });
  };

  return (
    <div className='flex mt-3 justify-center p-2 h-ful12'>
      <div className='grid grid-cols-3 border border-gray-600  border-collapse'>
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className='border bg-blue-200 text-lg cursor-pointer border-gray-600  w-20 h-20 flex items-center justify-center'
          >
            {currentState.X.includes(index)
              ? 'X'
              : currentState.O.includes(index)
              ? 'O'
              : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
