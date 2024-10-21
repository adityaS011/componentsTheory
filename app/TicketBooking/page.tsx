'use client';

import React, { useState } from 'react';
import GridLayout from './component/GridLayout';

const page = () => {
  const [selectedSeat, setSelectedSeat] = useState<string[]>([]);

  const handleSeatSelection = (selection: string) => {
    if (selectedSeat.includes(selection)) {
      setSelectedSeat(selectedSeat.filter((item) => item !== selection.trim()));
      return;
    }
    if (selectedSeat.length > 5) {
      alert('Max 5 seats can be selected');
      return;
    }
    setSelectedSeat((prev) => [...prev, selection.trim()]);
  };

  return (
    <div className='w-screen min-h-screen h-full flex justify-center items-center gap-4 '>
      <div className='w-fit h-full flex flex-row gap-6 items-center'>
        <div className='w-52 h-96 mt-12 bg-blue-600 text-white items-center justify-center flex rounded-e-lg'>
          Screen
        </div>
        <div className='flex flex-col items-center  w-fit'>
          <GridLayout
            section={'VIP'}
            totalSeats={12}
            rowSize={4}
            handleSeatSelection={handleSeatSelection}
            selectedSeat={selectedSeat}
          />
        </div>
        <div className='flex flex-col items-center w-fit'>
          <GridLayout
            section={'MID'}
            totalSeats={30}
            rowSize={6}
            handleSeatSelection={handleSeatSelection}
            selectedSeat={selectedSeat}
          />
        </div>
        <div className='flex flex-col items-center w-fit'>
          <GridLayout
            section={'GEN'}
            totalSeats={64}
            rowSize={8}
            handleSeatSelection={handleSeatSelection}
            selectedSeat={selectedSeat}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
