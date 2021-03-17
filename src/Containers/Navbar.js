import React from 'react'
import Button from './../Components/Button'
import './Container.css';
import { NavLink } from "react-router-dom";

const navbar = (props) =>(
    <div className="Navbar">
     <NavLink to="/about-me" exact className="Button" activeClassName="ActiveButton"> About Me</NavLink>
      <NavLink to="/projects"exact className="Button" activeClassName="ActiveButton">  Projects </NavLink>
      <NavLink to="/cv"exact className="Button" activeClassName="ActiveButton">  Cv </NavLink>
      <NavLink to="/contact"exact className="Button" activeClassName="ActiveButton">  Contact Me </NavLink>
    </div>
    
)
export default navbar