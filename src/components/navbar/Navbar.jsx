
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react"
import "./Navbar.css"
import logo from '../../images/logo-no-background.svg';
import { logout, useProfileState, useProfileDispatch } from '../../contexts';
import { useNavigate } from 'react-router-dom';
import noimage from '../../images/no-profile-picture-icon.png';
const Navbar = () => {
    const userDetails = useProfileState();
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const dispatch = useProfileDispatch();
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    const handleSignout = async (e) => {
        e.preventDefault();
        try {
            let response = await logout(dispatch);
            console.log("You are logged out!")
            navigate("/")
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark 
        bg-primary flex-sm-nowrap flex-wrap shadow-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar5">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand flex-grow-1"><img className="logo-img" src={logo} style={{ maxHeight: 30 + 'px' }} /></span>
                <div className="navbar-collapse collapse flex-grow-1 justify-content-center" id="navbar5">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/"><i className="fa fa-home"></i> </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse order-3 dual-collapse2 flex-grow-1">
                    <ul className="nav navbar-nav ms-auto">
                        {userDetails.user ? (<li className="nav-item dropdown">
                            <button href="#" data-bs-toggle="dropdown" className="btn btn-secondary btn-rounded dropdown-toggle user-action">
                                <img src={userDetails.user.image?userDetails.user.image.picture_url:noimage} className="avatar" alt="Avatar" />
                               {userDetails.user.first_name} {userDetails.user.last_name}<b className="caret"></b>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg-end">
                                <a href="/profile" className="dropdown-item"><i className="fa fa-user"></i> Profile</a>
                                <a href="#" className="dropdown-item"><i className="fa fa-home"></i> Properties</a>
                                <a href="/reservations" className="dropdown-item"><i className="fa fa-calendar"></i> Reservations</a>
                                <a href="/booking-requests" className="dropdown-item"><i className="fa fa-check"></i> Booking Requests</a>
                                <a href="/transactions" className="dropdown-item"><i className="fa fa-euro"></i> Transactions</a>
                                <a className="dropdown-divider"></a>
                                <a href="#" onClick={handleSignout} className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                            </div>
                        </li>) : (<li className="nav-item">
                            <button href="#" data-bs-toggle="dropdown" className="btn btn-secondary dropdown-toggle user-action btn-rounded">
                                <i className="fa fa-user avatar" />
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg-end p-2">
                               <div className="row">
                               <div className="container-fluid p-4 d-flex d-flex-column" style={{width:'250px'}}>
                               <a href='/signin' className="btn btn-primary btn-block mt-2" style={{ height: 47 + 'px', marginTop: -2 + 'px' }}>Login</a>
                               <div className="dropdown-divider"></div>
                               <a href='/register' className="btn btn-primary btn-block mt-2" style={{ height: 47 + 'px', marginTop: -2 + 'px' }}>Sign Up</a>
                                </div>
                               </div>
                            </div>
                        </li>)}


                    </ul>
                </div>
            </div>
        </nav>
       
    )

}

export default Navbar