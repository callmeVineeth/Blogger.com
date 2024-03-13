import React, { useState } from 'react';
import DummyData from '../Components/Data';
import DashboardItem from '../Components/DashboardItem';

function Dashboard() {
  // Make sure DummyData is an array before passing to useState
  // const initialUserData = Array.isArray(DummyData) ? DummyData : [];

  // const [userData, setUserData] = useState(initialUserData);
  const [userData, setUserData] = useState(DummyData);
   console.log(userData)

  return (
    <div className=' h-50 w-75 d-flex flex-wrap'>
      <h1>Dashboard</h1> 

     
      {userData.map((user, id) => (
      <DashboardItem key={id} postImg={user.image} details={user.Joined}/> 
      ))}


    </div>
  );
}

export default Dashboard;
