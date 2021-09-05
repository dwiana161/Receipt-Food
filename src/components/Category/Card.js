import React from 'react';
import './Category.css';

const Card = ({ image, title, item}) => {
    return (
        <div className="card-category card text-center">
            <div className="overflow">
                <img src={image} alt="" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{title}</h4>
                <p className="item-category card-text text-secondary">
                    {item}
                </p>
            </div>
        </div>
    )
}

export default Card
