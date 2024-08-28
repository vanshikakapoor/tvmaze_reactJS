import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar/NavBar';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



export default function App(){
  return (
    <div>
      <NavBar />
      <Dashboard />
    </div>
  );
};

