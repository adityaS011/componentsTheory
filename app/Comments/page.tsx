import React from 'react';
import Comments from './components/Comments';

const Page = () => {
  return (
    <div className='w-full h-screen overflow-y-auto no-scrollbar'>
      <div className='flex flex-col mt-8 items-center gap-4 w-full h-full'>
        {/* Use responsive width and padding */}
        <div className='flex flex-col gap-4 p-4 w-full max-w-xl md:max-w-2xl lg:max-w-3xl'>
          <div className='h-60 w-full bg-blue-300 rounded-md'></div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Page;
