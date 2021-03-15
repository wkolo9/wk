import React from 'react';
import TechImg from './../../Components/projects/TechImg'
import TypeIt from "typeit-react";
import Aux from './../../hoc/Aux1'
import Logo from './Logo'
import AnimatedTyping from './AnimatedTyping'
const Pic = () => {
    return (<Aux>
      
        <div className="Pic">
              <div>
               <AnimatedTyping></AnimatedTyping>
              </div>
            </div>
        
        </Aux>
    );
};

export default Pic;