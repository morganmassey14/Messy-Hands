import React from "react"
import { useHistory } from "react-router"
import { NavLink } from "react-router-dom"
import home from "../../images/home.png"
import gallary from "../../images/gallary.png"
import logout from "../../images/logout.png"
import navlogo from "../../images/navlogo.png"


export const NavBar = ({ clearUser }) => {

    const history = useHistory()

    const handleLogout = () => {
        const retVal = window.confirm("Are you sure you want to Logout?")

        if (retVal == true) {
          history.push('/login');
          clearUser();
        } else {
          return false
        }

    }

    return (
        <>
        <div className="navbar"><img className="nav__logo" src={navlogo} alt="" />
        <NavLink to="/" className="home__button"><img className="homebutton" src={home} alt="" /></NavLink>
        <NavLink to="/gallary" className="gallary__button"><img className="gallarybutton" src={gallary} alt="" /></NavLink>
        <NavLink to="/login" className="logout__button" onClick={handleLogout}><img className="logoutbutton" src={logout} alt="" /></NavLink>
        </div>
        </>
    )
}