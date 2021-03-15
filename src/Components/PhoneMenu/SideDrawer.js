import React from 'react';
import Button from './../Button'
import { NavLink } from "react-router-dom";
const SideDrawer = (props) => {
    let style=null;
    // if(props.open){
    //   style={display:'none'}
    // }
    // if(props.closed){
    //     style={display:'none'}
    //   }

    return (
        // <div className={style}>
                <div className="SideDrawer" onClick={props.click}>
                    <br></br><br></br><br></br>
                    <NavLink to="/about-me" >  Who Am I? </NavLink><br></br><br></br><br></br>
                    <NavLink to="/projects">  Projects</NavLink><br></br><br></br><br></br>
                    <NavLink to="/cv">  Cv </NavLink><br></br><br></br><br></br>
                    <NavLink to="/contact"> Contact Me </NavLink>
                </div>
        // </div>
    );
};

export default SideDrawer;