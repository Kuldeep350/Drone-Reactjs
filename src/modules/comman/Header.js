import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render(){
        return(
            <div>
       

    {/* <!-- Preloader -->  */} 
   <div id="preloader">
        <div className="dorne-load"></div>
    </div>

        {/* <!-- ***** Search Form Area ***** --> */}
    <div className="dorne-search-form d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="search-close-btn" id="closeBtn">
                        <i className="pe-7s-close-circle" aria-hidden="true"></i>
                    </div>
                    <form action="#" method="get">
                        <input type="search" name="caviarSearch" id="search" placeholder="Search Your Desire Destinations or Events"/>
                        <input type="submit" className="d-none" value="submit"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
                 {/* <!-- ***** Header Area Start ***** --> */}
    <header className="header_area" id="header">
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-12 h-100">
                    <nav className="h-100 navbar navbar-expand-lg">
                        <Link className="navbar-brand" to="/"><img src={require("../../img/core-img/logo.png")} alt=""/></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dorneNav" aria-controls="dorneNav" aria-expanded="false" aria-label="Toggle navigation"><span className="fa fa-bars"></span></button>
                        {/* <!-- Nav --> */}
                        <div className="collapse navbar-collapse" id="dorneNav">
                            <ul className="navbar-nav mr-auto" id="dorneMenu">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/explore" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Explore <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/home">Home</Link>
                                        <Link className="dropdown-item" to="/explore">Explore</Link>
                                        <Link className="dropdown-item" to="/listing">Listing</Link>
                                        <Link className="dropdown-item" to="/Singlelisting">Single Listing</Link>
                                        <Link className="dropdown-item" to="/contact">Contact</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/listing" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listings <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                                        <Link className="dropdown-item" to="/home">Home</Link>
                                        <Link className="dropdown-item" to="/explore">Explore</Link>
                                        <Link className="dropdown-item" to="/listing">Listing</Link>
                                        <Link className="dropdown-item" to="/Singlelisting">Single Listing</Link>
                                        <Link className="dropdown-item" to="/contact">Contact</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            {/* <!-- Search btn --> */}
                            <div className="dorne-search-btn">
                                <Link id="search-btn" to="#"><i className="fa fa-search" aria-hidden="true"></i> Search</Link>
                            </div>
                            {/* <!-- Signin btn --> */}
                            <div className="dorne-signin-btn">
                                <Link to="#">Sign in  or Register</Link>
                            </div>
                            {/* <!-- Add listings btn --> */}
                            <div className="dorne-add-listings-btn">
                                <Link to="#" className="btn dorne-btn">+ Add Listings</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- ***** Header Area End ***** --> */}
            </div>
        );
    }
}
export default Header;