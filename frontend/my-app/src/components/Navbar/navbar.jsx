import React from 'react';
import { Nav, NavLink, Bars, NavMenu, Button } from './navelements.js';
import { useHistory } from 'react-router-dom';

export const NavBar = () => {
  const history = useHistory();
  const handlelogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('refreshtoken');
    history.push('/login');
  };
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          {/* <NavLink to="#">Carrr</NavLink> */}
          <NavLink to="/about">About</NavLink>
          <NavLink to="/wishlist">Wishlist</NavLink>
          <NavLink to="/notes">Notes</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <Button onClick={handlelogout}>Logout</Button>
        </NavMenu>
      </Nav>
    </>
  );
};
