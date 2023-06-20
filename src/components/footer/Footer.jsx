
import "./Footer.css"
 import logo from '../../images/logo-no-background.svg';
const Footer = () => {
  return (
    <div className="container-fluid bg-footer  py-5 px-sm-3 px-lg-5" style={{marginTop: 90 + 'px'}}>
    <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
            <a href="" className="navbar-brand">
            <img src={logo} style={{maxHeight:40+'px'}}/>
            </a>
            <p>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
            <h6 className="text-black text-uppercase mt-4 mb-3" style={{lineSpacing:5 + 'px'}}>Follow Us</h6>
            <div className="d-flex justify-content-start">
                <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-black text-uppercase mb-4" style={{lineSpacing:5 + 'px'}}>Our Services</h5>
            <div className="d-flex flex-column justify-content-start">
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Destination</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Packages</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Guides</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Testimonial</a>
                <a className="text-black-50" href="#"><i className="fa fa-angle-right mr-2"></i>Blog</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-black text-uppercase mb-4" style={{lineSpacing:5 + 'px'}}>Usefull Links</h5>
            <div className="d-flex flex-column justify-content-start">
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Destination</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Services</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Packages</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Guides</a>
                <a className="text-black-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Testimonial</a>
                <a className="text-black-50" href="#"><i className="fa fa-angle-right mr-2"></i>Blog</a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-black text-uppercase mb-4" style={{lineSpacing:5 + 'px'}}>Contact Us</h5>
            <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
            <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
            <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
            <h6 className="text-black text-uppercase mt-4 mb-3" style={{lineSpacing:5 + 'px'}}>Newsletter</h6>
            <div className="w-100">
                <div className="input-group">
                    <input type="text" className="form-control border-light" style={{padding: 25 + 'px'}} placeholder="Your Email"></input>
                    <div className="input-group-append">
                        <button className="btn btn-primary px-3">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer