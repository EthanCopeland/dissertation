import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="site-footer pure-g">
            <div className="footer-content">
                <div className="footer-text-content">

                    <div className="footer-extras pure-u-1-3">
                        <h6>Navigation</h6>
                        <ul className="footer-links">
                            <li><a href="/">Homepage</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Account</a></li>
                        </ul>
                    </div>

                    <div className="footer-misc footer-links pure-u-1-3">
                        <h6>Products</h6>
                        <ul className="footer-links">
                            <li><a href="/">Gift Sets</a></li>
                            <li><a href="/">Hats</a></li>
                            <li><a href="/">Gloves and Scarves</a></li>
                            <li><a href="/">Masks</a></li>
                        </ul>
                    </div>

                    <div className="footer-misc footer-links pure-u-1-3">
                        <h6>About Us</h6>
                        <ul className="footer-links">
                            <li><a href="/">Our Story</a></li>
                            <li><a href="/">Our Aims</a></li>
                            <li><a href="/">Business Ethics</a></li>
                            <li><a href="/"> Accessbility</a></li>
                            <li><a href="/"> Usability</a></li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="footer-copyright pure-u-2-5">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by <a href="/">PolarClothing</a></p>
                </div>

                <div className="footer-social pure-u-3-5">
                    <ul className="social-icons">
                        <li><a className="facebook" href="/"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a className="twitter" href="/"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a className="github" href="/"><i className="fab fa-github"></i></a></li>
                        <li><a className="youtube" href="/"><i className="fab fa-youtube-square"></i></a></li>   
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;