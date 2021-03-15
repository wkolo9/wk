import React from 'react'
import Button from './../Components/Button'
import './Container.css';
import { NavLink } from "react-router-dom";
const navbar = (props) =>(
    <div className="Navbar">
      <NavLink to="/about-me" >  <Button>About Me</Button> </NavLink>
      <NavLink to="/projects">  <Button>Projects</Button> </NavLink>
      <NavLink to="/cv">  <Button>Cv</Button> </NavLink>
      <NavLink to="/contact">  <Button>Contact Me</Button> </NavLink>
    </div>
    
)
export default navbar