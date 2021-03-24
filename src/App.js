import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
import Products from './products/products.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Header from './header/header.js';
import Footer from './footer/footer.js';
import PageNotFound from './PageNotFound.js';

function App() {
	return (
        <Router basename="/">
            <div className="App">
                <Header img="" />

                <Switch>
                    <Route exact path="/">
                        <Nav page="homepage" />
                        <Homepage />
                    </Route>
                    <Route exact path="/products">
                        <Nav page="products" />
                        <Products />
                    </Route>
                    <Route exact path="/about">
                        <Nav page="about" />
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Nav page="contact" />
                        <Contact />
                    </Route>
                    <Route path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>

                <br />

                <Footer />
            </div>
        </Router>
	);
}

export default App;
