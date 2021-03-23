import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Nav from "./navbar/navbar.js";
import Homepage from './homepage/homepage.js';
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
