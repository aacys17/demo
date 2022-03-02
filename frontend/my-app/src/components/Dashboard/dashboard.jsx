import React from 'react';
import { NavBar } from '../Navbar/navbar';
import MoodBoard from '../Board/moodBoard';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <MoodBoard />
    </div>
  );
};

export default Dashboard;
