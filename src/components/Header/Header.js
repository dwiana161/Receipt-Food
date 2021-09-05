import React from 'react';
import './Header.css';
import picture from '../image/Image.png';

const Header = () => {
    return ( 
    <div className="container">
       <div class="row no-gutters">
            <div className="col-6">
            <h1 className="header-title">Good Food Us Good Mood</h1>   
            
            <div className="col-6">
                <p className="header-text">I would think that conversing our natural resources should
                be a conservative position: not to waste food, and not to throw
                away a lot of the food that we buy.
                </p>
                <div className="header-link col-md-12 col-12">
                    <button className="btn-header btn">Daftar Sekarang</button>
                    <p href="#" className="btn-main-offer">About Us</p>  
                </div>
            </div>
            </div>
            <div className="col-sm">
                <img className="picture" src={picture} alt='logo...' />
            </div>
        </div>
        </div>
    )
}

export default Header