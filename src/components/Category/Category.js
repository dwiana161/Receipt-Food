import React from 'react';
import Card from './Card';
import './Category.css';
import Cupcakes from '../image/cupcakes.jpg';
import Pizza from '../image/pizza.jpg';
import Kebab from '../image/kebab.png';
import Salmon from '../image/salmon.jpg';
import Doughnut from '../image/dougnut.jpg';

const Category = () => {
    return (
        <div className="category container">
            <h2 className="title">Browser Our Category</h2>
            <h4 className="receipt">Receipt</h4>
            <div className="row justify-content-start">
                <div className="caraousel slide w-100">
                    <div className="carousel-inner w-100" role="listbox">
                        <div className="caraousel-item">
                            <div className="col-md-4">
                                <Card 
                                    image= {Cupcakes}
                                    title='Cupcakes'
                                    item='22 Items'
                                />
                            </div>
                        </div>
                        <div className="caraousel-item">
                            <div className="col-md-4">
                                <Card 
                                    image= {Pizza}
                                    title='Pizza'
                                    item='25 Items'
                                />
                            </div>
                        </div>
                        <div className="caraousel-item">
                            <div className="col-md-4">
                                <Card
                                    image= {Kebab} 
                                    title='Kebab'
                                    item='12 Items' 
                                />
                            </div>
                        </div>
                        <div className="caraousel-item">
                            <div className="col-md-4">
                                <Card 
                                    image= {Salmon}
                                    title='Salmon'
                                    item='22 Items'
                                />
                            </div>
                        </div>
                        <div className="caraousel-item">
                            <div className="col-md-4">
                                <Card 
                                    image= {Doughnut}
                                    title='Doughnut'
                                    item='11 Items'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse d-none d-lg-block">
                    <button type="submit" className="btn-category btn mb-4 float-end">
                        PREV
                    </button>
                    <button type="submit" className="btn-category btn mb-4 float-end">
                        NEXT
                    </button>
                </div>
            </div>
      </div>
    )
}

export default Category;
