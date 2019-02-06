import React, { Component } from 'react';
import Header from '../comman/Header';
import Footer from '../comman/Footer';

 class Contact extends Component {
     render(){
         return(
             <div>
                 <Header/>
 {/* <!-- ***** Breadcumb Area Start ***** --> */}
    <div className="breadcumb-area bg-img bg-overlay gmi" >
    </div>
    {/* <!-- ***** Breadcumb Area End ***** --> */}
    {/* <!-- ***** Contact Area Start ***** --> */}
    <div className="dorne-contact-area d-md-flex" id="contact">
        {/* <!-- Contact Form Area --> */}
        <div className="contact-form-area equal-height">
            <div className="contact-text">
                <h4>Hello, Get in touch with us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper rhoncus. Curabitur pulvinar vel augue sit amet vestibulum. Proin tempus lacus porta lorem blandit aliquam eget quis ipsum. Vivamus accumsan consequat ligula non volutpat. Sed mollis orci non cursus vestibulum. Pellentesque vitae est a augue laoreet venenatis sed eu felis. Sed cursus magna nec turpis ullamcorper, eget rutrum felis egestas. Nunc odio ex, fermentum efficitur nunc vitae, efficitur hendrerit diam. Lorem ipsum dolor sit amet, consectetur.</p>
                <div className="contact-info d-lg-flex">
                    <div className="single-contact-info">
                        <h6><i className="fa fa-map-signs" aria-hidden="true"></i> Main Avenue Soho, NY</h6>
                        <h6><i className="fa fa-map-signs" aria-hidden="true"></i> No. 25-33</h6>
                    </div>
                    <div className="single-contact-info">
                        <h6><i className="fa fa-envelope-o" aria-hidden="true"></i> contact@yourbusiness.com</h6>
                        <h6><i className="fa fa-phone" aria-hidden="true"></i> +34 567 22478 49567</h6>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <div className="contact-form-title">
                    <h6>Contact Business</h6>
                </div>
                <form action="#">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Your Name"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <input type="email" name="email" className="form-control" placeholder="Email Address"/>
                        </div>
                        <div className="col-12">
                            <input type="text" name="subject" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="col-12">
                            <textarea name="message" className="form-control" id="Message" cols="30" rows="10" placeholder="Your Message"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn dorne-btn">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* <!-- Map Area --> */}
        <div className="dorne-map-area equal-height">
            <div id="googleMap">
            {/* <Map google={this.props.google} zoom={14}>
                                        
                                    <Marker onClick={this.onMarkerClick}
                                            name={'Current location'} />

                                <InfoWindow onClose={this.onInfoWindowClose}>
     
                                      </InfoWindow>
                                </Map> */}
            </div>
        </div>
    </div>
    {/* <!-- ***** Contact Area End ***** --> */}
    <Footer/>
             </div>
         )
     }
 }
 
 export default Contact;
 