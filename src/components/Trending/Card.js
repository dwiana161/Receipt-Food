import React from 'react';
import './Trending.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = ({ image, title, item, star1, star2, star3, star4, star5}) => {
    return (
        <div className="card-trending card">
              <div className="card-body">
                <img src={image} alt="" className="img-food card-img-top"/>
                <div className="text-body">
                <h4 className="card-title-trending">{title}</h4>
                <p className="text-trending card-text">
                    {item}
                </p>
                </div>
                <div className="star">
                    <FontAwesomeIcon icon={faStar} className={star1}/>
                    <FontAwesomeIcon icon={faStar} className={star2}/>
                    <FontAwesomeIcon icon={faStar} className={star3}/>
                    <FontAwesomeIcon icon={faStar} className={star4}/>
                    <FontAwesomeIcon icon={faStar} className={star5}/>
                    </div>
                </div>
        </div>
    )
}

export default Card