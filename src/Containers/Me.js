import React from 'react'
import './Container.css';
import Text from '../Components/me/Text'
import Pic from '../Components/me/Pic'
import Goal from '../Components/me/Goal'
import Webdev from '../Components/me/Webdev'
import Logo from '../Components/me/Logo'
import TechImg from './../Components/projects/TechImg'
const me = (props) =>(
    <div className="Me">
        
            <Pic/>
            <div style={{width:'15vh'}}>
            {/* <TechImg id='Github'></TechImg>  */}
            </div>
           

        <div className='surrouningDiv'><span style={{marginLeft:'3vh'}}>Who Am I?</span><Text/></div>
        <div className='breakDiv'><Logo/></div>
        <div className='surrouningDiv'>Why this path?<Webdev/></div>
        {/* <div className='breakDiv'><Logo/></div> */}
        <div className='surrouningDiv'>My goal<Goal/></div>
        
    </div>
    
)
export default me