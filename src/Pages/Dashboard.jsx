import React, { useState } from 'react';
import DummyData from '../Components/Data';
import DashboardItem from '../Components/DashboardItem';

function Dashboard() {
  // Make sure DummyData is an array before passing to useState
  const initialUserData = Array.isArray(DummyData) ? DummyData : [];

  const [userData, setUserData] = useState(initialUserData);

  return (
    <div className=' h-50 w-75'>
      <h1>Dashboard</h1> 

     
      {userData.map((user, id) => (
      <DashboardItem key={id} postImg={user.image} details={user.Joined}/> 
      ))}

    </div>
  );
}

export default Dashboard;
