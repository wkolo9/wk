import React from 'react'
import Aux from '../hoc/Aux1'
import './Button.css';
import {NavLink} from 'react-router-dom'

const button = (props) =>{
    let style = 'Button'
     props.clicked ? style = 'ActiveButton' : style = 'Button'

    return(
    <Aux>
        
        <div className={style}>
            {props.children}
        </div>
    </Aux>

)}
export default button