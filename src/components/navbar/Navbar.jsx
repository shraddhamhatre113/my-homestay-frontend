import {Link, useLocation} from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {

    const [active,setActive]= useState(false);
    const [open,setOpen]= useState(false);

    const {pathname}=useLocation()
    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true): setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    },[]);

    const currentUser={
        id:1,
        username: "inspiration",
        isMember: true,

    }
  return (
    <div className={active || pathname !== "/" ? "navbar active" :"navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className="link">
                <span>book</span>
                <span className="m">M</span>
                <span>e.com</span>
                </Link>
            </div>
            <div className="middleLinks">
                <Link className="link">HOME</Link>
                <Link className="link">PAGES</Link>
                <Link className="link">HOTELS</Link>
                <Link className="link">BLOGS</Link>
                <Link className="link">SERVICES</Link>
            </div>
            <div className="rightLinks">
                <Link className="link">Sign In</Link>
                {!currentUser && <button>JOIN</button>}
                {currentUser &&(
                    <div className="user" onClick={()=>setOpen(!open)}>
                        <img src="https://media.licdn.com/dms/image/D4E35AQEJ7S5nxvRrMQ/profile-framedphoto-shrink_200_200/0/1678567388711?e=1686229200&v=beta&t=dS9kHYktwZ4TgM2RM4mpossSppaHQpwxFjw6UAFcluc" alt="" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {
                                currentUser?.isMember && (
                                    <>
                                    <Link to="/account" className="link">Account</Link>
                                    <Link to="/reservations" className="link">Reservations</Link>
                                    <Link to="/notifications" className="link">Notifications</Link>
                                    <Link to="/wishlists" className="link">Wishlists</Link>
                                    <Link to="/helpcenter" className="link">Help Center</Link>
                                    <Link to="/logout" className="link">Logout</Link>
                                    </>
                                )
                            }
                        </div>}
                    </div>
                )

                }
            </div>
        </div>
       { (active || pathname !=="/") && (
       <><hr />
        <div className="sologen">
            <span>The Best acccomodations for everyone !</span>
            
        </div></>)}
    </div>
  )
}

export default Navbar