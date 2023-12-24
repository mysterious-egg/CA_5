import React from 'react';
import logoSvg from '../assets/KITAB.svg'; 

function Logo() {
  return (
    <div className="logo-main">
      <img src={logoSvg} alt="BooVean Logo" className="logo"  />
      <h1>BooVean</h1>
      
    </div>
  );
}

export default Logo;
