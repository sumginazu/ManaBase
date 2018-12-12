import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link className='btn' to='/'>
        <h1>ManaBase</h1>
      </Link>
      <Link className='btn btn-primary' to='/cardSearch'>
        Card Search
      </Link>
      <Link className='btn btn-primary' to='/'>
        Groups
      </Link>
      <Link className='btn btn-primary' to='/collection'>
        My Collection
      </Link>
      <Link className='btn btn-primary' to='/'>
        My Decks
      </Link>
      <Link className='btn btn-secondary' to='/'>
        Login
      </Link>
      <Link className='btn btn-secondary' to='/'>
        Register
      </Link>
    </div>
  );
}
