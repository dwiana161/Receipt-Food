import React from 'react';
import Card from './Card';
import './Category.css';

const Category = () => {
    return (
        <div className="category container">
            <h2 className="title">Browser Our Category</h2>
            <h4 className="receipt">Receipt</h4>
            <div className="row justify-content-start">
                <div className="col-sm-4 col-md-4">
                    <Card 
                        title='Cupcake'
                        item='22 Items'
                    />
                </div>
                <div className="col-sm-4 col-md-4">
                    <Card 
                        title='Pizza'
                        item='25 Items'
                    />
                </div>
                <div className="col-sm-4 col-md-4">
                    <Card 
                       title='Kebab'
                       item='12 Items' 
                    />
                </div>
                <div className="col-sm-4 col-md-4">
                    <Card 
                        title='Salmon'
                        item='22 Items'
                    />
                </div>
                <div className="col-sm-4 col-md-4">
                    <Card 
                        title='Doughnut'
                        item='11 Items'
                    />
                </div>
                <div className="d-flex flex-row-reverse">
                    <button type="submit" className="btn-category btn mb-4">
                        PREV
                    </button>
                    <button type="submit" className="btn-category btn mb-4">
                        NEXT
                    </button>
                </div>
            </div>
      </div>
    )
}

export default Category;
