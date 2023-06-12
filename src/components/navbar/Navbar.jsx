
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react"
import "./Navbar.css"
import logo from '../../images/logo-no-background.svg';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation()
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, []);

    const currentUser = {
        id: 1,

        username: "inspiration",
        isMember: true,

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary flex-sm-nowrap flex-wrap shadow-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar5">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand flex-grow-1"><img className="logo-img" src={logo} style={{ maxHeight: 30 + 'px' }} /></span>
                <div className="navbar-collapse collapse flex-grow-1 justify-content-center" id="navbar5">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PAGES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">HOTELS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOGS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse order-3 dual-collapse2 flex-grow-1">
                    <ul className="nav navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <button href="#" data-bs-toggle="dropdown" className="btn btn-secondary dropdown-toggle user-action btn-rounded">
                                <i className="fa fa-user avatar" />
                            </button>
                            <ul className="dropdown-menu p-2">
                                <li><a href ='/signin' className="btn btn-primary btn-block" style={{ height: 47 + 'px', marginTop: -2 + 'px' }}>Login</a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li><a  href ='/register' className="btn btn-primary btn-block" style={{ height: 47 + 'px', marginTop: -2 + 'px' }}>Sign Up</a>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <button href="#" data-bs-toggle="dropdown" className="btn btn-secondary btn-rounded dropdown-toggle user-action">
                                <img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" className="avatar" alt="Avatar" />
                                Paula Wilson <b className="caret"></b>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#"><i className="fa fa-user-o"></i> Profile</a></li>
                                <li><a href="#"><i className="fa fa-calendar-o"></i> Calendar</a></li>
                                <li><a href="#"><i className="fa fa-sliders"></i> Settings</a></li>
                                <li className="dropdown-divider"></li>
                                <li><a href="#"><i className="material-icons">&#xE8AC;</i> Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        /* <div className="container-fluid position-relative nav-bar p-0">
            <div className="position-relative p-0" style={{zIndex: 9}}>
                <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="" className="navbar-brand">
                        <img src={logo} style={{maxHeight:30+'px'}}/>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div className="navbar-nav ml-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="package.html" className="nav-item nav-link">Tour Packages</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu border-0 rounded-0 m-0">
                                    <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                    <a href="single.html" className="dropdown-item">Blog Detail</a>
                                    <a href="destination.html" className="dropdown-item">Destination</a>
                                    <a href="guide.html" className="dropdown-item">Travel Guides</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Right</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div> */
    )

}

export default Navbar