import React from 'react';
import Aux from '../../hoc/Aux1'
import './Project.css'; 
const ProjectText = (props) => {
    let text =(<span className= 'projectTextIns'>{props.children}</span>)
    if (props.id=='zombie')
    text =(<span className= 'projectTextInsZ'>{props.children}</span>)

    return (
       <Aux>
           {text}
       </Aux>
    );


};

export default ProjectText;