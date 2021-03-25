import React from 'react';
import logo from '../images/logo.png';
import './header.css';

function Navbar() {
	return (
		<header>
            <img src={logo} className="logo" alt="logo" />
		</header>
	)
}

export default Navbar;