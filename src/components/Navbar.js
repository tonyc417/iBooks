import React from 'react';

const frontNav = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">iBooks</a>
                <div className="collapase navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Saved</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default frontNav;