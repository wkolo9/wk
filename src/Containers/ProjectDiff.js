import React, { Component } from 'react'
import Aux from './../hoc/Aux1'
import './Container.css';
import Project from '../Components/projects/Project'
import ProjectExtended from '../Components/projects/ProjectExtended'
class project extends Component{
state={
    typeWeb: true,
    extends: false,
    roll: true,

    name: null,
}
extendProjectHandler =(type) =>{
        const newExtends = this.state.extendsProject
        this.setState({extends: true,roll:false, name:type})
}
rollProjectHandler=()=>{
    const newRoll = this.state.extendsProject
    this.setState({extends: false,roll:true})
    console.log('aasdasd')
}
    render(){
        const X=['SmartRoom','Labview','Numerical Methods']
        let projects = null;
        if(this.state.roll){
            projects= ( <Aux>
            <h1 className="Header">Click the project to see more info (and GitHub repository)!</h1>
            <div className="Projects">
                <Project name='SmartRoom' extend={() =>this.extendProjectHandler(X[0])}></Project>
                <Project name='Labview'extend={() =>this.extendProjectHandler(X[1])}></Project>
                <Project name='Numerical Methods'extend={() =>this.extendProjectHandler(X[2])}></Project>
                {/* <Project name='OpenSource'extend={() =>this.extendProjectHandler(X[3])}></Project> */}
             </div>
            </Aux>)
        }
        if(this.state.extends){
            projects=( <Aux>
               <div className='BackButtonPlace'><button className='BackButton' onClick={this.rollProjectHandler}>Go back</button></div> 
                <div className="HeaderEx">Click the project to roll!</div>
                <ProjectExtended name={this.state.name} roll={this.rollProjectHandler}></ProjectExtended>
                </Aux>)
        }
        return(
            <Aux>
                 {projects}
            </Aux>
            
    
    )}
}
export default project