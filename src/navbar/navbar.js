import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <div id="nav-box">
                <ul id="navbar" className="pure-u-1-3">
                    <li><a className={this.props.page === "homepage" ? "active" : ""} href="/"><i className="far fa-home"></i> Homepage</a></li>
                    <li><a className={this.props.page === "products" ? "active" : ""} href="products"><i className="fal fa-shopping-basket"></i> Products</a></li>
                    <li><a className={this.props.page === "about" ? "active" : ""} href="about"><i className="far fa-question-circle"></i> About Us</a></li>
                    <li><a className={this.props.page === "contact" ? "active" : ""} href="contact"><i className="far fa-envelope"></i> Contact Us</a></li>
                    <li><a className={this.props.page === "account" ? "active" : ""} href="account"><i className="far fa-user-circle"></i> Account</a></li>
                    <li><a className="snipcart-checkout snipcart-summary" href="/"> <i className="far fa-shopping-cart"></i> Cart <span className="snipcart-total-price">$0.00</span></a></li>
                </ul>
            </div >
        )
    }

}