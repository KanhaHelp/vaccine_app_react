// import logo from './logo.svg';
import './App.css';
// import Loginform from './components/form';
import React from 'react';
import AllRoutes from './routes';
import HeaderNavbar from './components/HeaderNavbar';

function App() {
  return (
    <>
    <HeaderNavbar />
      <AllRoutes />
      {/* <Loginform /> */}
    </>
  );
}

export default App;
