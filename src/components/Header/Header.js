import React from 'react';
import './Header.css';
import picture from '../image/Image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
                    <a href="#" className="btn-main-offer">About Us</a> 
                </div>
            </div>
            </div>
            <div className="col-sm">
                <img className="picture" src={picture} alt='logo...' />
                <div className="card-header card">
              <div className="card-body">
                <img src={picture} alt="" className="img-header card-img-top"/>
                <div className="text-body">
                <h4 className="header-food-title card-title">Green Salad Tomato</h4>
                <p className="text-header card-text">
                    Tomato
                </p>
                </div>
                <div className="header-star star">
                    <FontAwesomeIcon icon={faStar} className='checked'/>
                    <FontAwesomeIcon icon={faStar} className='checked'/>
                    <FontAwesomeIcon icon={faStar} className='checked'/>
                    <FontAwesomeIcon icon={faStar} className='checked'/>
                    <FontAwesomeIcon icon={faStar} className='checked'/>
                    </div>
                </div>
        </div>
            </div>
        </div>
        </div>
    )
}

export default Header