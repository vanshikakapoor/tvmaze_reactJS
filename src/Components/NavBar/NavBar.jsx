import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

import './NavBar.css'
import SearchBar from './SearchBar';
import OptionsBar from './OptionBar';
import Login from './Login';
function NavBar() {
  return (
    <div>
       
    <Navbar className="header">
            <div className='container row w-100 col-md-2 col-lg-1'>
            <Navbar.Brand href="#home" className='align-self-start col'>
                <img id="logo" src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="TVmaze" title="Keep track of your shows. TV calendar, TV watchlist, TV information database, REST TV API and more." />
            </Navbar.Brand>
            <div className='col flex-grow-1'> 
            <SearchBar /> 
            </div>
             
            <Nav className="d-flex col justify-content-end">
                    <Login title ="Sign In"/>
                    <Login title ="Register"/>
            </Nav>
            </div>
            </Navbar>
           
               <OptionsBar />
            </div>
       
  );
}

export default NavBar;
