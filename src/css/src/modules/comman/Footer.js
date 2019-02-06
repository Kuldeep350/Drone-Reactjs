import React, { Component } from 'react';


class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="dorne-footer-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 d-md-flex align-items-center justify-content-between">
                    <div className="footer-text">
                        <p>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" >Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                    <div className="footer-social-btns">
                        <a href="#"><i className="fa fa-linkedin" aria-haspopup="true"></i></a>
                        <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-haspopup="true"></i></a>
                        <a href="#"><i className="fa fa-facebook" aria-haspopup="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- ****** Footer Area End ****** --> */}
          
   
               </div>
               
        )
    }
}
export default Footer;