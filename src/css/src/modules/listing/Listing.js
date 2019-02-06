import React, { Component } from 'react';
import Header from '../comman/Header';
import Footer from '../comman/Footer';

class Listing extends Component {
    render(){
        return(
            <div>
                <Header/>
                {/* <!-- ***** Breadcumb Area Start ***** --> */}
    <div className="breadcumb-area bg-img bg-overlay gmi" ></div>
    {/* <!-- ***** Breadcumb Area End ***** --> */}
    {/* <!-- ***** Listing Destinations Area Start ***** --></div> */}
    <section className="dorne-listing-destinations-area section-padding-100-50">
        <div className="container">
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
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
                {/* <!-- Single Features Area --> */}
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="single-features-area mb-50">
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
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Listing Destinations Area End ***** --> */}
    <Footer/>
            </div>
        )
    }
}
export default Listing;