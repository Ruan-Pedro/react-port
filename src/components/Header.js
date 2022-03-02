import React from 'react';
import  '../App.css'
import Menu from './Menu'; 

function Header(props) {
    return (
        <header className="header">
        <h1 className="title">{props.name}</h1>
        <Menu links={["Home","About","Portfolio","Contact"]} navLinks={["/home","/about","/portfolio","/contact"]}></Menu>
    </header>
    );
}
export default Header;