import image from '../image/image.png';
import './Header.css';
import React from 'react';

function Header() {
  
    return (
            <header>
              <img src={image} alt="" />
              <h1>Courses Registration List</h1>
            </header>
    )
}
export default Header;
