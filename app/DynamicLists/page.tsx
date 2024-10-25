'use client';
import React, { useCallback, useState } from 'react';
import Input from '../ui/Input';

type User = {
  id: string;
  name: string;
  giftItem?: string;
};

let GiftData = ['Toy', 'Car', 'Flowers', 'Phone'];

const page = () => {
  const [user, setUser] = useState<string>('');
  const [userLists, setUserLists] = useState<User[]>(() =>
    JSON.parse(localStorage.getItem('userLists') || '[]')
  );

  const handleAddCLick = () => {
    if (!user.trim()) {
      alert('enter name first to add');
      return;
    }
    const tempUser: User = {
      id: Date.now().toString(),
      name: user,
    };
    setUserLists((prev) => [...prev, tempUser]);
    setUser('');
    localStorage.setItem('userLists', JSON.stringify(userLists));
  };
  const handleAssignGifts = () => {
    const tempUsersData: User[] = userLists.map((item, index) => {
      return {
        ...item,
        giftItem: GiftData[Math.ceil(index % GiftData.length)],
      };
    });
    setUserLists(tempUsersData);
  };
  const handleShuffle = () => {
    GiftData = GiftData.sort(() => Math.random() - 0.5);
    handleAssignGifts();
  };
  return (
    <div className='flex flex-col mt-10 items-center gap-4 text-lg  w-full'>
      <h1>Assign Gifts</h1>
      <div className='flex flex-row gap-4 mt-8 w-full justify-center '>
        <Input input={user} setInput={setUser} className='w-1/5' />
        <button
          onClick={handleAddCLick}
          className='py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 shadow-md rounded-lg h-fit'
        >
          Add+
        </button>
      </div>
      <div>
        {userLists.map((item) => {
          return (
            <div
              key={item.id}
              className='bg-gray-200 text-black text-lg font-medium px-4 py-2 flex flex-row gap-2 '
            >
              <p>Name: {item.name}</p>
              <p>{item.giftItem ? `Gift: ${item.giftItem}` : ''}</p>
            </div>
          );
        })}
      </div>
      <div className='flex flex-row gap-3'>
        <button
          onClick={handleAssignGifts}
          className='px-4 py-2 bg-green-500 text-white shadow-md rounded-md hover:bg-green-600'
        >
          Assign Gifts
        </button>
        <button
          onClick={handleShuffle}
          className='px-4 py-2 bg-green-500 text-white shadow-md rounded-md hover:bg-green-600'
        >
          Shuffle
        </button>
        <button
          onClick={() => {
            setUserLists([]);
            localStorage.setItem('userLists', '');
          }}
          className='px-4 py-2 bg-green-500 text-white shadow-md rounded-md hover:bg-green-600'
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default page;
