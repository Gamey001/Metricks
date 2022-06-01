import React from "react";
import {Link} from "react-router-dom";
import "../../../index.css";


const navBarLinks = [
    {route: "/about", title: "About us"},
    {route: "/", title: "Blog"},
    {route: "/", title: "Contact us"}
]
export const NavBar = () => {
  /**Navbar uniques styles */
  const navbarBrand = {alignSelf: "flex-start", textTransform: "uppercase", fontWeight: "700", color: "#ffffff"}
  const navbarBrandInner = {width: "12.3125rem", height: "10.5625rem",position: "relative",top: "-1.7rem"}
  const navbarBrandImg = {maxWidth: "100%", transform: "scale(.35)"}
  const navbarBrandTxt = {position: "absolute",top: "43%",left: "50%", transform: "translateX(-50%)", fontSize: "1.4rem"}
  
  /**render */
  return (
    <nav className="navbar navbar-expand-md navbar-light pt-4">
      {/* Brand */}

      <a style={navbarBrand} href="#" className="navbar-brand text-center mt-2">
        <div style={navbarBrandInner}>
        <img style={navbarBrandImg} src={require("../../../logo.png").default} alt="logo" />
        <h2 style={navbarBrandTxt}><b>Metricks</b></h2>
        </div>
      </a>

      {/*Toggler/collapsibe Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul style={{marginLeft: "61.625rem !important"}} className="navbar-nav ml-auto">
         {
             navBarLinks.map(({route, title})=>{
                return<li key={title} className="nav-item">
            <Link to={route} style={{marginBottom: "8.1875rem",background: (title==="Contact us") && "#401ac1", paddingTop: "1.5rem", borderRadius: "2.3rem", marginRight: "4.625rem",paddingRight: "2.4375rem",paddingLeft: "2.4375rem"}} className={`nav-link mt-2 ${title==='Contact us'? 'btn contact-us py-4 px-5':''}`}>{title}</Link>
          </li>
             })
         }
        </ul>
      </div>
    </nav>
  );
};

