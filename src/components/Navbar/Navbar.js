import React from 'react';
import logo from '../image/image 55.png';
import './Navbar.css';

const Navbar = () => {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt='logo...' /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Promotions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item-enter">
                <a className="nav-link" href="#">Masuk</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-success my-2" type="submit" >
          Daftar Sekarang
        </button>
      </nav> 
      </div>   
    )
}

export default Navbar
