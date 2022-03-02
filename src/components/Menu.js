import React  from "react";
import { Link } from "react-router-dom";
import '../App.css';
function Menu(props) {
    // const listLinks = props.links.map((link,index)=><li key={index} className="nav-item">{link}</li>) ***MODO DINAMICO
    return (
        <ul className="nav">
        {/* {listLinks} */}
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
    );
}
export default Menu;