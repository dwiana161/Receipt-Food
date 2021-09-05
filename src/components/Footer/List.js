import React from 'react';
import './Footer.css';

const List = ({ title, list1, list2, list3, list4 }) => {
    return (
        <div>
            <h4>{title}</h4>
                <ul className="text list-unstyled">
                    <li>{list1}</li>
                    <li>{list2}</li>
                    <li>{list3}</li>
                    <li>{list4}</li>
                </ul>
        </div>
    )
}

export default List;
