import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "10px",
    margin: "0 8px 8px",
    background: "black",
    TextDecoration: "none",
    color: "white",
}

function NavBar () {

    return(
        <div>
            <NavLink to="/" exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue"
            }}>
                Home
            </NavLink>

            <NavLink to="/about" exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue"
            }}>
                About
            </NavLink>

            <NavLink to="/contact" exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue"
            }}>
                Contact Us
            </NavLink>

            <NavLink to="/products" exact
            style={linkStyles}
            activeStyle={{
                background: "darkblue"
            }}>
                Products
            </NavLink>
        </div>
    )

}

export default NavBar