  
import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {

    render() {
        return (
            <div id="nav-box">
                <ul id="navbar" className="pure-u-1-3">
                    <li><a className={this.props.page === "homepage" ? "active" : ""} href="/"><i className="fas fa-home"></i> Homepage</a></li>
                    <li><a className={this.props.page === "products" ? "active" : ""} href="/"><i class="fas fa-shopping-basket"></i> Products</a></li>
                    <li><a className={this.props.page === "about" ? "active" : ""} href="/"><i class="far fa-question-circle"></i> About Us</a></li>
                    <li><a className={this.props.page === "contact" ? "active" : ""} href="/"><i class="far fa-envelope"></i> Contact Us</a></li>
                    <li><a className={this.props.page === "account" ? "active" : ""} href="/"><i class="far fa-user-circle"></i> Account</a></li>
                </ul>
            </div>
        )
    }

}