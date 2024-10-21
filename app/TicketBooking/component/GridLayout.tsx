'use client';

import { cn } from '@/app/utils/cn';
import React from 'react';

const GridLayout = ({
  section,
  totalSeats,
  rowSize,
  handleSeatSelection,
  selectedSeat,
}: {
  section: 'VIP' | 'GEN' | 'MID';
  totalSeats: number;
  rowSize: number;
  handleSeatSelection: (val: string) => void;
  selectedSeat: string[];
}) => {
  const rows = Math.ceil(totalSeats / rowSize);

  return (
    <div className='flex flex-col items-center gap-4 -mt-10'>
      <h3 className='text-lg font-medium '>{section} Section</h3>

      <div className='flex flex-col gap-6'>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className={cn('flex justify-center items-center gap-3')}
          >
            {Array.from({ length: rowSize }).map((_, seatIndex) => {
              const seatNumber = rowIndex * rowSize + seatIndex;
              if (seatNumber >= totalSeats) return null;

              return (
                <div
                  key={seatNumber}
                  className={cn(
                    'h-10 w-10 rounded-s-lg flex items-center justify-center cursor-pointer text-sm font-medium',
                    'border-2 transition-transform duration-300 ease-in-out transform hover:scale-110',
                    selectedSeat.includes(`${section}${seatNumber}`)
                      ? 'bg-red-500 border-red-700'
                      : 'bg-green-400 border-green-600'
                  )}
                  onClick={() => handleSeatSelection(`${section}${seatNumber}`)}
                >
                  {seatNumber + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
