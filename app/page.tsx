'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 to-blue-600'>
      <div className='text-center space-y-8'>
        <h1 className='text-white text-3xl font-bold'>Choose an Option</h1>
        <div className='flex space-x-6'>
          <button
            onClick={() => navigateTo('/Comments')}
            className='px-6 py-3 bg-red-500 text-white rounded-full text-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105'
          >
            Comments
          </button>
          <button
            onClick={() => navigateTo('/TicketBooking')}
            className='px-6 py-3 bg-red-500 text-white rounded-full text-lg shadow-md hover:bg-red-600 transition-transform transform hover:scale-105'
          >
            Ticket Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
