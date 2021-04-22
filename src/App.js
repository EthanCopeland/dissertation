import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.scss';

// import NavLink from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
import Products from './products/products.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Signin from './account/signin.jsx';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import PageNotFound from './PageNotFound.js';

class NarrowNav extends React.Component {
    state = { expanded: true }

    toggle = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        let nav = ""

        if (this.state.expanded) {
            nav = <div>
                <ul id="navbar" className="pure-u-1-3">
                    <li>
                        <NavLink page="homepage" activeClassName="active" exact to="/"><i className="far fa-home"></i> Homepage </NavLink>
                    </li>
                    <li>
                        <NavLink page="products" activeClassName="active" exact to="/products" ><i className="fal fa-shopping-basket"></i> Products</NavLink>
                    </li>
                    <li>
                        <NavLink page="about" activeClassName="active" exact to="/about"><i className="far fa-question-circle"></i> About Us</NavLink>
                    </li>
                    <li>
                        <NavLink page="contact" activeClassName="active" exact to="/contact"><i className="far fa-envelope"></i> Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink page="account" activeClassName="active" exact to="/account"><i className="far fa-user-circle"></i> Account</NavLink>
                    </li>
                    <li><a className="snipcart-checkout snipcart-summary" href="/"> <i className="far fa-shopping-cart"></i> Cart <span className="snipcart-total-price">$0.00</span></a></li>

                </ul>
            </div>
        }
        return (
            <div>
                <button id="btn" onClick={this.toggle}>Menu ≡</button>
                {nav}
            </div>
        )
    }
}


function App() {
    return (
        <Router basename="/dissertation/enhanced">
            <div className="App">
                <Header img="" />

                <nav id="nav-box">
                    <ul id="navbar" className="pure-u-1-3">
                        <li>
                            <NavLink page="homepage" activeClassName="active" exact to="/"><i className="far fa-home"></i> Homepage </NavLink>
                        </li>
                        <li>
                            <NavLink page="products" activeClassName="active" exact to="/products" ><i className="fal fa-shopping-basket"></i> Products</NavLink>
                        </li>
                        <li>
                            <NavLink page="about" activeClassName="active" exact to="/about"><i className="far fa-question-circle"></i> About Us</NavLink>
                        </li>
                        <li>
                            <NavLink page="contact" activeClassName="active" exact to="/contact"><i className="far fa-envelope"></i> Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink page="account" activeClassName="active" exact to="/account"><i className="far fa-user-circle"></i> Account</NavLink>
                        </li>
                        <li><a className="snipcart-checkout snipcart-summary" href="/"> <i className="far fa-shopping-cart"></i> Cart <span className="snipcart-total-price">$0.00</span></a></li>

                    </ul>
                </nav>

                <nav className="NarrowNav">
                    <ul>
                        <NarrowNav />
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route exact path="/products">
                        <Products />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/account">
                        <Signin />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>

                <br />

                <Footer />
            </div>
        </Router>
    );
}

export default App;
