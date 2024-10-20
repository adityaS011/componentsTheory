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
    <div className='w-screen min-h-screen h-full flex justify-center items-center my-10'>
      <div className='w-full flex flex-col gap-3 items-center'>
        <div className='flex flex-col items-center w-1/6'>
          <p>Vip</p>
          <GridLayout
            section={'VIP'}
            totalSeats={25}
            rowSize={5}
            handleSeatSelection={handleSeatSelection}
            selectedSeat={selectedSeat}
          />
        </div>
        <div className='flex flex-col items-center w-1/2'>
          <p>Midddle</p>
          <GridLayout
            section={'MID'}
            totalSeats={36}
            rowSize={6}
            handleSeatSelection={handleSeatSelection}
            selectedSeat={selectedSeat}
          />
        </div>
        <div className='flex flex-col items-center w-1/2'>
          <p>General</p>
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
