import React from 'react'
import Aux from '../hoc/Aux1'
import './Button.css';
import {NavLink} from 'react-router-dom'

const button = (props) =>{
    return(
    <Aux>
        
        <div>
            {props.children}
        </div>
    </Aux>

)}
export default button