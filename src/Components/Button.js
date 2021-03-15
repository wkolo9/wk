import React from 'react'
import Aux from '../hoc/Aux1'
import './Button.css';
import {NavLink} from 'react-router-dom'

const button = (props) =>(
    <Aux>
        <button className='Button' >
            {props.children}
        </button>
    </Aux>
    

)
export default button