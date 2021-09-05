import React from 'react';
import logo from '../image/image 55.png';
import './Footer.css';
import List from './List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faInstagram } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="main-footer footer-collapse">
            <div className= "container">
                <div className="row">
                    {/*Column 1 */}
                    <div className="col-md-3 col-sm-6">
                    <img className="picture-footer" src={logo} alt='logo...' />
                    <ul className="list-unstyled">
                        <li className="address">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                            Kecamatan Setiabudi, Kota jakarta Selatan,
                            Daerah Khusu Ibukota Jakarta 12950
                        </li>
                    </ul>
                    <section className="icon mb-4">
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        <a className="envelope btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a className="phone btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={faPhone} />
                        </a>
                        {/* <a className="btn-outline-light btn-floating m-1" href="#!" role="button">
                        <FontAwesomeIcon icon={['fab', 'instagram-f']} />
                        </a> */}
                    </section>
                </div>
                 {/*Column 2 */}
                 <div className="col-md-3 col-sm-6">
                     <List
                        title='Categories'
                        list1='Cupcake'
                        list2='Pizza'
                        list3='Kebab'
                        list4='Salmon'
                     />
                </div>
                 {/*Column 3 */}
                 <div className="col-md-3 col-sm-6">
                     <List
                        title='About Us'
                        list1='About Us'
                        list2='FAQ'
                        list3= 'Report Problem'
                     />
                </div>
                 {/*Column 4 */}
                 <div className="col-md-3 col-sm-6">
                     <h4>Newsletter</h4>
                    <ul className="list-unstyled">
                        <li className="discount">Get now free 50% discount for all products on your first order</li>
                        <div className="form col-md-12 col-12">
                        <div className="form-outline form-white mb-4">
                            <input type="email" placeholder="Your Email address" id="form5Example2" className="form-control" />
                        </div>
                        <button type="submit" className="btn-footer btn btn-outline mb-4">
                            SEND
                        </button>
                        </div>
                        <p><FontAwesomeIcon className="envelope" icon={faEnvelope}/> elemesid@gmail.com </p>
                        <p><FontAwesomeIcon className="phone" icon={faPhone}/> 0888 1111 2222 </p>
                    </ul>
                </div>
                </div>
                <div className="footer-bottom">
                    <p className="copy text-xs-center">
                        &copy;{new Date().getFullYear()} ELEMES ID. ALL RIGHTS RESERVED
                    </p>
                </div>
         </div>
    </div>
    )
}

export default Footer
