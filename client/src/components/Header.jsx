import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/users/new">Add User</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
