import React from 'react'
import './Project.css';
import Aux from '../../hoc/Aux1'
import TechImg from './TechImg'
import ProjectText from './ProjectText'
const project = (props) =>{
    let text =  null;
    switch(props.name){
        case('Portfolio'):
        text = (<div className="Project" onClick ={props.extend}>
        <h3 className="projectName">{props.name}</h3>
        <div className="Underline"></div>
        <div className="projectText">
            <ProjectText>This is a page that you are currently on. Written in React using Javascript's libraries.
            </ProjectText>
        </div>
        <div className="TechImgContainer">
            <TechImg id="React"></TechImg>
            <TechImg id='CSS'></TechImg>
            <TechImg id='HTML'></TechImg>
            <TechImg id='JavaScript'></TechImg>
                    </div>
             </div>)
             break;
     case('ZombiePHORIA'):
        text = (<div className="Project" onClick ={props.extend}>
        <h3 className="projectName">{props.name}</h3>
        
        <div className="Underline"></div>
        <div className="projectText">
            <ProjectText>
                2D online multiplayer shooter game with a zombies in which each player can choose different class, 
                store progres and increase statistics using game's currency.
                </ProjectText>
        </div>
        <div className="TechImgContainer">
            <TechImg id='HTML'></TechImg> 
            <TechImg id='CSS'></TechImg>
            <TechImg id='NodeJS'></TechImg>
            <TechImg id='MySql'></TechImg>
            <TechImg id='JavaScript'></TechImg>
            <TechImg id='php'></TechImg> 
                    </div>
                    <span className="GhAvailable">Github repository is available</span>
             </div>)
             break;
     case('Pizza Builder'):
        text = (<div className="Project" onClick ={props.extend}>
        <h3 className="projectName">{props.name}</h3>
        <div className="Underline"></div>
        <div className="projectText">
            <ProjectText>Website to dynamically change ingredients of a pizza shown on a screen with an order system.
                
</ProjectText>
        </div>
        <div className="TechImgContainer">
             <TechImg id="React"></TechImg>
            <TechImg id='CSS'></TechImg>
            <TechImg id='HTML'></TechImg>
            <TechImg id='JavaScript'></TechImg>
            <TechImg id='Firebase'></TechImg>
        </div>
        <span className="GhAvailable">  Github will be soon available</span>
            
             </div>)
             break;
    case('OpenSource'):
             text = (<div className="Project" onClick ={props.extend}>
             <h3 className="projectName">{props.name}</h3>
             <div className="Underline"></div>
             <div className="projectText">
                 <ProjectText>
                     Open source project with a frontend - backend structure 
                     being developed with a working programmers as their after-hours project.
                 </ProjectText>
             </div>
             <div className="TechImgContainer">
                 <TechImg id="React"></TechImg>
                 <TechImg id='CSS'></TechImg>
                 <TechImg id='HTML'></TechImg>
                 <TechImg id='JavaScript'></TechImg>
                 <TechImg id='Docker'></TechImg>
                 <TechImg id='Postman'></TechImg>
                         </div>
                  </div>)
                  break;
    case('SmartRoom'):
                  text = (<div className="Project" onClick ={props.extend}>
                  <h3 className="projectName">{props.name}</h3>
                  <div className="Underline"></div>
                  <div className="projectText">
                      <ProjectText>Internet of Things project with a Arduino's microprossesor.

                      </ProjectText>
                  </div>
                  <div className="TechImgContainer">
                      <TechImg id="C"></TechImg>
                      <TechImg id='Arduino'></TechImg>

                              </div>
                              <span className="GhAvailable">Github repository is available</span>
                       </div>)
                       break;
    case('Labview'):
                       text = (<div className="Project" onClick ={props.extend}>
                       <h3 className="projectName">{props.name}</h3>
                       <div className="Underline"></div>
                       <div className="projectText">
                           <ProjectText> Visual image processing system to detec if the person is wearing covering mask.
                           </ProjectText>
                       </div>
                       <div className="TechImgContainer">
                           <TechImg id="LabView"></TechImg>
                           <TechImg id='Python'></TechImg>
     
                                   </div>
                                   <span className="GhAvailable">Github will be soon available</span>
                            </div>)
                            break;
        case('Numerical Methods'):
                            text = (<div className="Project" onClick ={props.extend}>
                            <h3 className="projectName">{props.name}</h3>
                            <div className="Underline"></div>
                            <div className="projectText">
                                <ProjectText>Scripts and programs used for engineering calculations.
                                </ProjectText>
                            </div>
                            <div className="TechImgContainer">
                                <TechImg id="C"></TechImg>
                                <TechImg id='Matlab'></TechImg>
          
                                        </div>
                                        <span className="GhAvailable">Github repository is available</span>
                                 </div>)
                                 break;
            }





    return(
        <Aux>
            {text}
        </Aux>
        
    )
}
    
   
export default project;