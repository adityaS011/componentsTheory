'use client';
import React, { useCallback, useState } from 'react';

const page = () => {
  const [movieData, setMovieData] = useState([]);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const callApi = async () => {
    try {
      const res = await fetch(
        'https://www.omdbapi.com/?s=Batman&page=2&apikey=b0d74b2d'
      );
      const data = await res.json();
      console.log(data);
      setMovieData(data.Search || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const debouncedApiCall = useCallback(debounce(callApi, 300), []);
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <button
        onClick={debouncedApiCall}
        className='p-2 bg-blue-500 text-white rounded-md mt-10'
      >
        fetch
      </button>
      <div>
        {movieData?.map((item) => {
          return <div key={item.id}>{item.Title}</div>;
        })}
      </div>
    </div>
  );
};

export default page;
