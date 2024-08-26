import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'black', padding: '5px' }}>
      <div className="logo" style={{ color: 'white', textAlign: 'left' }}>
        <h1>Logo</h1>
      </div>
      <nav style={{ textAlign: 'right', left: '30px' }}>
        <Link to="/" style={{ color: 'white',margin: '0 10px' }}>home</Link>
        <Link to="/page1" style={{ color: 'white',margin: '0 10px' }}>Page 1</Link>
        <Link to="/page2" style={{ color: 'white', margin: '0 10px' }}>Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;