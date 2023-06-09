import React from "react";
import "./CodoidCSS.css";
import  Logo from "./Alogo.png"
import { Link,Outlet } from "react-router-dom";


const Navbar =()=>{
    return(
        <>
       <div className="nav">
    <div className="divimg">
        <img src={Logo} className="img" alt="bala"/>
    </div>
    <div className="divtext">
         <h1> Provocation industrial</h1>
    </div>
    <div className="pro" id="bala">
        <ol>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/About">ABOUT US</Link></li>
          <li><Link to="/What">WHAT WE DO</Link></li>
          <li><Link to="/Projects">PROJECTS</Link></li>
          <li><Link to="/Blogs">BLOGS</Link></li>
          <li><Link to="/Contact">CONTACT</Link></li>
        </ol>
        <Outlet/>
    </div>
    <div className="king" onClick={()=>{
      var navbar=document.getElementById('bala')
      navbar.classList.toggle('show'); 
    }}>
<span></span>
<span></span>
<span></span>
    </div>
</div>
        </>
    );

}
export default Navbar;