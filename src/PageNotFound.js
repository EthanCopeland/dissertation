import React from 'react';
import { NavLink } from "react-router-dom";

function PageNotFound() {
    return (
        <div id="error" className="pure-u-3-5">
            <h2 id="error-text">404 - Page Not Found</h2>
            <br />
            <NavLink id="safety" to="/">Back to Safety</NavLink>
            <br />
        </div>
    )
}

export default PageNotFound;