import React from 'react';
import Card from './Card';
import './Trending.css';
import pizza from '../image/pexels-brett-jordan-842519 1.png';
import pizza2 from '../image/pexels-daria-shevtsova-1260968 1.png';
import kebab from '../image/pexels-nishant-aneja-2955819 1.png';
import salmon from '../image/pexels-olga-lioncat-7245464 1.png';
import cupcake from '../image/pexels-oleg-magni-1908674 1.png';
import doughnut from '../image/pexels-alena-shekhovtcova-6940978 1.png';
import doughnutPink from '../image/pexels-karley-saagi-2064449 1.png';
import kathi from '../image/pexels-polina-tankilevitch-6419736 1.png';

const Trending = () => {
    return (
        <div className="container ">
            <h2 className="title">Browser Our Trending</h2>
            <h4 className="receipt">Receipt</h4>
            <div className="d-flex justify-content-start mt-50 mb-50">
            <div className="row justify-content-around">
                <div className="col-sm-6 col-lg-3">
                    <Card 
                        image={pizza}
                        title='Pizza Paperoni'
                        item='Pizza'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <Card 
                        image={pizza2}
                        title='Pizza Meat'
                        item='Pizza'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <Card 
                       image={kebab}
                       title='Doner Kebab'
                       item='Kebab' 
                       star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                        star5='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3">
                    <Card 
                        image={salmon}
                        title='Salmon Roll'
                        item='Salmon'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <Card 
                        image={cupcake}
                        title='Cupcake Choco'
                        item='Cupcake'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <Card 
                        image={doughnut}
                        title='Doughnut Milk'
                        item='Doughnut'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                        star5='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <Card 
                        image={doughnutPink}
                        title='Doughnut Unicorn'
                        item='Doughnut'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                    />
                </div>
                <div className="col-sm-6 col-lg-3 mt-4">
                    <Card 
                        image={kathi}
                        title='Kathi Kebab'
                        item='Kebab'
                        star1='checked'
                        star2='checked'
                        star3='checked'
                        star4='checked'
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn-trending btn mb-4">
                        ALL Receipt
                    </button>
                </div>
            </div>
            </div>
      </div>
    )
}

export default Trending;
