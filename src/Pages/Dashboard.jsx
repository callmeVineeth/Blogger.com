import React, { useState } from 'react';
import DummyData from '../Components/Data';

function Dashboard() {
  // Make sure DummyData is an array before passing to useState
  const initialUserData = Array.isArray(DummyData) ? DummyData : [];

  const [userData, setUserData] = useState(initialUserData);

  return (
    <div className=' h-50 w-75'>
      <h1>Dashboard</h1>
      {userData.map((user, id) => (
        <div className='bg-info' key={id}>
          <div xs={3}>
            <img src={user.image} alt={`Avatar of ${user.name}`} />
          </div>
          <div xs={9}>
            <h2>{user.name}</h2>
            <p>Posts: {user.posts}</p>
            <p>Joined: {user.Joined}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
