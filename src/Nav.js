import React, { Component } from 'react';
import {Link } from 'react-router-dom';
const Nav = ()=>

  <div class="nav-bar">
      <Link to='/' ><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
      <Link to='/about'><i class="fa fa-user-circle" aria-hidden="true"></i> About </Link>
      <Link to='/contact'><i class="fa fa-address-card" aria-hidden="true"></i> Contact</Link>
      <Link to='/projects'><i class="fas fa-briefcase" aria-hidden="true"></i> Projects</Link>
  </div>

export default Nav;
