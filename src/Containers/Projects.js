import React, { Component } from 'react'
import Aux from './../hoc/Aux1'
import './Container.css';
import ProjectWeb from '../Containers/ProjectWeb'
import ProjectDiff from '../Containers/ProjectDiff'

class project extends Component{
state={
    typeWeb: false,
}
Handler=()=>{
    const newExtends = this.state.typeWeb
    this.setState({typeWeb: !newExtends})
}
    render(){
        
        let projects = ( <Aux>
           <ProjectWeb></ProjectWeb>
            </Aux>)
        if(this.state.typeWeb){
            projects=( <Aux>
                <ProjectDiff></ProjectDiff>
                </Aux>)
        }
        return(
            <Aux>
                <div className="projectHeader">
                   WebDev projects
                   </div>
                   <div className="projectHeader">
                    <p className="paragraph"></p><label className="switch" >
                        <input type="checkbox" onChange={this.Handler}/>
                        <span className="slider round" ></span>
                    </label>
                    </div>
                    <div className="projectHeader"> University projects</div>
                    <div style={{clear:'both'}}>
                    {projects}     
                    </div>
                    

            </Aux>
            
    
    )}
}
export default project