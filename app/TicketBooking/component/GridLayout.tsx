import React, { useState } from 'react';

const GridLayout = ({
  section,
  totalSeats = 25,
  rowSize = 5,
  handleSeatSelection,
  selectedSeat,
}: {
  section: 'VIP' | 'GEN' | 'MID';
  rowSize?: number;
  totalSeats?: number;
  handleSeatSelection: (val: string) => void;
  selectedSeat: string[];
}) => {
  return (
    <div className={`grid grid-cols-${rowSize} w-full gap-2`}>
      {Array.from({ length: totalSeats }).map((_, index) => {
        return (
          <div
            key={index}
            className={`p-2 cursor-pointer caret-transparent selection:bg-none ${
              selectedSeat.includes(section + index)
                ? 'bg-red-400'
                : 'bg-green-500'
            }`}
            onClick={() => handleSeatSelection(section + index)}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default GridLayout;
