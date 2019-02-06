import React, { Component } from 'react';
import Header from '../comman/Header';
import Footer from '../comman/Footer';

class Index extends Component {
    
           render(){
            return(
                <div>
                     <Header/>
    {/* <!-- ***** Welcome Area Start ***** --> */}
        <section className="dorne-welcome-area bg-img bg-overlay gmi" >
    
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-12 col-md-10">
                    <div className="hero-content">
                        <h2>Discover places near you</h2>
                        <h4>This is the best guide of your city</h4>
                    </div>
                    {/* <!-- Hero Search Form --> */}
                    <div className="hero-search-form">
                        {/* <!-- Tabs --> */}
                        <div className="nav nav-tabs" id="heroTab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-places-tab" data-toggle="tab" href="#nav-places" role="tab" aria-controls="nav-places" aria-selected="true">Places</a>
                            <a className="nav-item nav-link" id="nav-events-tab" data-toggle="tab" href="#nav-events" role="tab" aria-controls="nav-events" aria-selected="false">Events</a>
                        </div>
                        {/* <!-- Tabs Content --> */}
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-places" role="tabpanel" aria-labelledby="nav-places-tab">
                                <h6>What are you looking for?</h6>
                                <form action="#" method="get">
                                    <select className="custom-select">
                                        <option selected>Your Destinations</option>
                                        <option value="1">New York</option>
                                        <option value="2">Latvia</option>
                                        <option value="3">Dhaka</option>
                                        <option value="4">Melbourne</option>
                                        <option value="5">London</option>
                                    </select>
                                    <select className="custom-select">
                                        <option selected>All Catagories</option>
                                        <option value="1">Catagories 1</option>
                                        <option value="2">Catagories 2</option>
                                        <option value="3">Catagories 3</option>
                                    </select>
                                    <select className="custom-select">
                                        <option selected>Price Range</option>
                                        <option value="1">$100 - $499</option>
                                        <option value="2">$500 - $999</option>
                                        <option value="3">$1000 - $4999</option>
                                    </select>
                                    <button type="submit" className="btn dorne-btn"><i className="fa fa-search pr-2" aria-hidden="true"></i> Search</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="nav-events" role="tabpanel" aria-labelledby="nav-events-tab">
                                <h6>What are you looking for?</h6>
                                <form action="#" method="get">
                                    <select className="custom-select">
                                        <option selected>Your Destinations</option>
                                        <option value="1">New York</option>
                                        <option value="2">Latvia</option>
                                        <option value="3">Dhaka</option>
                                        <option value="4">Melbourne</option>
                                        <option value="5">London</option>
                                    </select>
                                    <select className="custom-select">
                                        <option selected>All Catagories</option>
                                        <option value="1">Catagories 1</option>
                                        <option value="2">Catagories 2</option>
                                        <option value="3">Catagories 3</option>
                                    </select>
                                    <select className="custom-select">
                                        <option selected>Price Range</option>
                                        <option value="1">$100 - $499</option>
                                        <option value="2">$500 - $999</option>
                                        <option value="3">$1000 - $4999</option>
                                    </select>
                                    <button type="submit" className="btn dorne-btn"><i className="fa fa-search pr-2" aria-hidden="true"></i> Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero Social Btn --> */}
        <div className="hero-social-btn">
            <div className="social-title d-flex align-items-center">
                <h6>Follow us on Social Media</h6>
                <span></span>
            </div>
            <div className="social-btns">
                <a href="#"><i className="fa fa-linkedin" aria-haspopup="true"></i></a>
                <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>                       
                <a href="#"><i className="fa fa-twitter" aria-haspopup="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-haspopup="true"></i></a>
            </div>
        </div>
    </section>
    {/* <!-- ***** Welcome Area End ***** --> */}
    {/* <!-- ***** Catagory Area Start ***** --></div> */}
    <section className="dorne-catagory-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="all-catagories">
                        <div className="row">
                            {/* <!-- Single Catagory Area --> */}
                            <div className="col-12 col-sm-6 col-md">
                                <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.2s">
                                    <div className="catagory-content">
                                        <img src={require("../../img/core-img/icon-1.png")} alt=""/>
                                        <a href="#">
                                            <h6>Hotels</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Catagory Area --> */}
                            <div className="col-12 col-sm-6 col-md">
                                <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.4s">
                                    <div className="catagory-content">
                                        <img src={require("../../img/core-img/icon-2.png")} alt=""/>
                                        <a href="#">
                                            <h6>Restaurants</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Catagory Area --> */}
                            <div className="col-12 col-sm-6 col-md">
                                <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.6s">
                                    <div className="catagory-content">
                                        <img src={require("../../img/core-img/icon-3.png")} alt=""/>
                                        <a href="#">
                                            <h6>Shopping</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Catagory Area --> */}
                            <div className="col-12 col-sm-6 col-md">
                                <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="0.8s">
                                    <div className="catagory-content">
                                        <img src={require("../../img/core-img/icon-4.png")} alt=""/>
                                        <a href="#">
                                            <h6>Beauty &amp; Spa</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Catagory Area --> */}
                            <div className="col-12 col-md">
                                <div className="single-catagory-area wow fadeInUpBig" data-wow-delay="1s">
                                    <div className="catagory-content">
                                        <img src={require("../../img/core-img/icon-5.png")} alt=""/>
                                        <a href="#">
                                            <h6>Cinema</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Catagory Area End ***** --> */}
    {/* <!-- ***** About Area Start ***** --> */}
    <section className="dorne-about-area section-padding-0-100">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-content text-center">
                        <h2>Discover your city with <br/><span>Dorne</span></h2>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit. Sed efficitur tortor neque, vitae aliquet urna varius sit amet. Ut rhoncus, nunc nec tincidunt volutpat, ex libero.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** About Area End ***** --> */}
    {/* <!-- ***** Editor Pick Area Start ***** --></div> */}
    <section className="dorne-editors-pick-area bg-img bg-overlay-9 section-padding-100 kl" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <span></span>
                        <h4>Cities you must see</h4>
                        <p>Editor’s pick</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="single-editors-pick-area wow fadeInUp" data-wow-delay="0.2s">
                        <img src={require("../../img/bg-img/editor-1.jpg")} alt=""/>
                        <div className="editors-pick-info">
                            <div className="places-total-destinations d-flex">
                                <a href="#">New York</a>
                                <a href="#">1643 Destinations</a>
                            </div>
                            <div className="add-more">
                                <a href="#">+</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-editors-pick-area wow fadeInUp" data-wow-delay="0.4s">
                        <img src={require("../../img/bg-img/editor-2.jpg")} alt=""/>
                        <div className="editors-pick-info">
                            <div className="places-total-destinations d-flex">
                                <a href="#">Barcelona</a>
                                <a href="#">943 Destinations</a>
                            </div>
                            <div className="add-more">
                                <a href="#">+</a>
                            </div>
                        </div>
                    </div>
                    <div className="single-editors-pick-area wow fadeInUp" data-wow-delay="0.6s">
                        <img src={require("../../img/bg-img/editor-3.jpg")} alt=""/>
                        <div className="editors-pick-info">
                            <div className="places-total-destinations d-flex">
                                <a href="#">paris</a>
                                <a href="#">243 Destinations</a>
                            </div>
                            <div className="add-more">
                                <a href="#">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Editor Pick Area End ***** --> */}
    {/* <!-- ***** Features Destinations Area Start ***** --> */}
    <section className="dorne-features-destinations-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading dark text-center">
                        <span></span>
                        <h4>Featured destinations</h4>
                        <p>Editor’s pick</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="features-slides owl-carousel">
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-1.jpg")} alt=""/>
                            {/* <!-- Price --> */}
                            <div className="price-start">
                                <p>FROM $59/night</p>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Ibiza</h5>
                                    <p>Party</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-2.jpg")} alt=""/>
                            {/* <!-- Price --> */}
                            <div className="price-start">
                                <p>FROM $59/night</p>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Paris</h5>
                                    <p>Luxury</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-3.jpg")} alt=""/>
                            {/* <!-- Price --> */}
                            <div className="price-start">
                                <p>FROM $59/night</p>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Lake Como</h5>
                                    <p>Spectacular</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-4.jpg")} alt=""/>
                            {/* <!-- Price --> */}
                            <div className="price-start">
                                <p>FROM $59/night</p>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Greece</h5>
                                    <p>Sunny</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-5.jpg")} alt=""/>
                            {/* <!-- Price --> */}
                            <div className="price-start">
                                <p>FROM $59/night</p>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Norway</h5>
                                    <p>All Year round</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Destinations Area End ***** --> */}
    {/* <!-- ***** Features Restaurant Area Start ***** --> */}
    <section className="dorne-features-restaurant-area bg-default">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <span></span>
                        <h4>Featured Restaurants</h4>
                        <p>Editor’s pick</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="features-slides owl-carousel">
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-6.jpg")} alt=""/>
                            {/* <!-- Rating & Map Area --> */}
                            <div className="ratings-map-area d-flex">
                                <a href="#">8.5</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Martha’s bar</h5>
                                    <p>Manhathan</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-7.jpg")} alt=""/>
                            {/* <!-- Rating & Map Area --> */}
                            <div className="ratings-map-area d-flex">
                                <a href="#">9.5</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Delux Restaurant</h5>
                                    <p>Paris</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-8.jpg")} alt=""/>
                            {/* <!-- Rating & Map Area --> */}
                            <div className="ratings-map-area d-flex">
                                <a href="#">8.2</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Jim’s corner Pub</h5>
                                    <p>Madrid</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-9.jpg")} alt=""/>
                            {/* <!-- Rating & Map Area --> */}
                            <div className="ratings-map-area d-flex">
                                <a href="#">8.7</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>tower Risto bar</h5>
                                    <p>Sydney</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Features Area --> */}
                        <div className="single-features-area">
                            <img src={require("../../img/bg-img/feature-10.jpg")} alt=""/>
                            {/* <!-- Rating & Map Area --> */}
                            <div className="ratings-map-area d-flex">
                                <a href="#">9.8</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                            <div className="feature-content d-flex align-items-center justify-content-between">
                                <div className="feature-title">
                                    <h5>Pizzeria venezia</h5>
                                    <p>Hong Kong</p>
                                </div>
                                <div className="feature-favourite">
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Restaurant Area End ***** --> */}
    {/* <!-- ***** Features Events Area Start ***** --> */}
    <section className="dorne-features-events-area bg-img bg-overlay-9 section-padding-100-50 lk" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading text-center">
                        <span></span>
                        <h4>Featured events</h4>
                        <p>Editor’s pick</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-wow-delay="0.2s">
                        <div className="feature-events-thumb">
                            <img src={require("../../img/bg-img/event-1.jpg")} alt=""/>
                            <div className="date-map-area d-flex">
                                <a href="#">26 Nov</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                        </div>
                        <div className="feature-events-content">
                            <h5>Jazz Concert</h5>
                            <h6>Manhathan</h6>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra...</p>
                        </div>
                        <div className="feature-events-details-btn">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-wow-delay="0.3s">
                        <div className="feature-events-thumb">
                            <img src={require("../../img/bg-img/event-2.jpg")} alt=""/>
                            <div className="date-map-area d-flex">
                                <a href="#">26 Nov</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                        </div>
                        <div className="feature-events-content">
                            <h5>DeeJay in the house</h5>
                            <h6>Manhathan</h6>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra...</p>
                        </div>
                        <div className="feature-events-details-btn">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-wow-delay="0.4s">
                        <div className="feature-events-thumb">
                            <img src={require("../../img/bg-img/event-3.jpg")} alt=""/>
                            <div className="date-map-area d-flex">
                                <a href="#">26 Nov</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                        </div>
                        <div className="feature-events-content">
                            <h5>Theatre Night outside</h5>
                            <h6>Manhathan</h6>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra...</p>
                        </div>
                        <div className="feature-events-details-btn">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-wow-delay="0.5s">
                        <div className="feature-events-thumb">
                            <img src={require("../../img/bg-img/event-4.jpg")} alt=""/>
                            <div className="date-map-area d-flex">
                                <a href="#">26 Nov</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                        </div>
                        <div className="feature-events-content">
                            <h5>Wine tasting</h5>
                            <h6>Manhathan</h6>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra...</p>
                        </div>
                        <div className="feature-events-details-btn">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-wow-delay="0.6s">
                        <div className="feature-events-thumb">
                            <img src={require("../../img/bg-img/event-5.jpg")} alt=""/>
                            <div className="date-map-area d-flex">
                                <a href="#">26 Nov</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                        </div>
                        <div className="feature-events-content">
                            <h5>New Moon Party</h5>
                            <h6>Manhathan</h6>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra...</p>
                        </div>
                        <div className="feature-events-details-btn">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-feature-events-area d-sm-flex align-items-center wow fadeInUpBig" data-wow-delay="0.7s">
                        <div className="feature-events-thumb">
                            <img src={require("../../img/bg-img/event-6.jpg")} alt=""/>
                            <div className="date-map-area d-flex">
                                <a href="#">26 Nov</a>
                                <a href="#"><img src={require("../../img/core-img/map.png")} alt=""/></a>
                            </div>
                        </div>
                        <div className="feature-events-content">
                            <h5>Happy hour at pub</h5>
                            <h6>Manhathan</h6>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra...</p>
                        </div>
                        <div className="feature-events-details-btn">
                            <a href="#" >+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Features Events Area End ***** --> */}
    {/* <!-- ***** Clients Area Start ***** --></div> */}
    <div className="dorne-clients-area section-padding-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="clients-logo d-md-flex align-items-center justify-content-around">
                        <img src={require("../../img/clients-img/1.png")} alt=""/>
                        <img src={require("../../img/clients-img/2.png")} alt=""/>
                        <img src={require("../../img/clients-img/3.png")} alt=""/>
                        <img src={require("../../img/clients-img/4.png")} alt=""/>
                        <img src={require("../../img/clients-img/5.png")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- ***** Clients Area End ***** --> */}
    <Footer/>
                </div>
            );
        }
}

export default Index;