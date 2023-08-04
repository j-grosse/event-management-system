import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from './Users';
import NewUser from './NewUser';
import UserDetails from './UserDetails';
import UpdateUser from './UpdateUser';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/new" element={<NewUser />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/:id/update" element={<UpdateUser />} />
      </Routes>
    </main>
  );
};

export default Main;
