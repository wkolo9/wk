import React from 'react'
import './Project.css';
import Aux from '../../hoc/Aux1'
import TechImg from './TechImg'
import ProjectText from './ProjectText'
const ProjectExtended = (props) =>{
    let text=null;
    switch(props.name){
        case('Portfolio'):
        text = (<div onClick ={props.extend}>
        <h3 className="projectName">{props.name}</h3>
        <div className="Underline"></div>
        <div className="projectText">
            <ProjectText>Website witten in React handling following fetures: 
                managing state, animated background, 
                PDF viewer, facebook's Messenger, animated text and email's sender 

            </ProjectText>
        </div>
       
        <div className="TechImgContainerExt">
            <TechImg id="React"></TechImg>
            <TechImg id='CSS'></TechImg>
            <TechImg id='HTML'></TechImg>
            <TechImg id='JavaScript'></TechImg>
                    </div>
             </div>)
             break;
     case('ZombiePHORIA'):
        text = (<div onClick ={props.extend}>
        <h3 className="projectName">{props.name}</h3>
        <div className="Underline"></div>
        <div className="projectText">
            <ProjectText id='zombie'>   2D online multiplayer shooter with a server and client structure. Server is written in Node.js and an index.html works as a client.
                Game includes friendly fire between players and a zombie system where zombies follow the closest player and deals damage. The amount of zombies is increasing over time, but of course players can shoot them down.
                To help players healing potions(hearts) are also spawning over time. Everything is rendered on a four biomes map, which also handle collision system.
                After 3 deaths player ends the game and get kicked from a server, but his score is stored in database. Score is transformed to account's experience and game's currency, using which the player can upgrade on of his classes or/and upgrade weapons.
                <p></p> <span className="TechRaport">Technical raport from this project is also availible on a GitHub!</span>
            </ProjectText>
        </div>
        <div className="ghLINKS">
       <a href='https://github.com/wkolo9/zombiePHORIA' target="_blank"> <TechImg id="Github"></TechImg></a>
       <a href='http://zombiephoria.great-site.net/index.html' target="_blank"> <TechImg id="Check It Online!"></TechImg></a>
        </div>
        <div className="TechImgContainerExt">
            <TechImg id='HTML'></TechImg> 
            <TechImg id='CSS'></TechImg>
            <TechImg id='NodeJS'></TechImg>
            <TechImg id='MySql'></TechImg>
            <TechImg id='JavaScript'></TechImg>
            <TechImg id='php'></TechImg> 
                    </div>
             </div>)
             break;
     case('Pizza Builder'):
        text = (<div onClick ={props.extend}>
        <h3 className="projectName">{props.name}</h3>
        <div className="Underline"></div>
        <div className="projectText">
            <ProjectText>
            Website to dynamically create pizza by adding and removing ingredients and show it on a screen. After creation there is a possibility to make an order. 
            After filling the order form with customer's adress, name, email the order is send to online database and can be handled from there.
            </ProjectText>
        </div>
        <div className="ghLINKS">
       {/* <a href='#' target="_blank"> <TechImg id="Github"></TechImg></a> */}
        </div>
        <div className="TechImgContainerExt">
             <TechImg id="React"></TechImg>
            <TechImg id='CSS'></TechImg>
            <TechImg id='HTML'></TechImg>
            <TechImg id='JavaScript'></TechImg>
            <TechImg id='Firebase'></TechImg>
        </div>
             </div>)
             break;
    case('OpenSource'):
             text = (<div onClick ={props.extend}>
             <h3 className="projectName">{props.name}</h3>
             <div className="Underline"></div>
             <div className="projectText">
                 <ProjectText>
                     I am taking a part in a project with some other programmers, who are currently working as a React/Java developers.
                     The project is consisted of a backend and a frontend elements. In this project I have an opportuinity to get with a new developer's tools, because 
                     during the development we are using Docker, Postman and Linux. 
                 </ProjectText>
             </div>
            
             <div className="TechImgContainerExt">
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
                  text = (<div onClick ={props.extend}>
                  <h3 className="projectName">{props.name}</h3>
                  <div className="Underline"></div>
                  <div className="projectText">
                      <ProjectText>
                          IoT system that can be remotly controled handling featchures such as:
                           turning on/off lighting,
                     changing the color of a LEDs,
                         roll up and down the window's curtain,
                         door opening to RFID tag
                        <p></p> <span className="TechRaport">Technical raport from this project is also availible on a GitHub!</span>
                      </ProjectText>
                  </div>
                  <div className="ghLINKS">
                  <a href='https://github.com/wkolo9/SmartRoom' target="_blank"> <TechImg id="Github"></TechImg></a>
                   </div>
                  <div className="TechImgContainerExt">
                      <TechImg id="C"></TechImg>
                      <TechImg id='Arduino'></TechImg>

                              </div>
                       </div>)
                       break;
    case('Labview'):
                       text = (<div onClick ={props.extend}>
                       <h3 className="projectName">{props.name}</h3>
                       <div className="Underline"></div>
                       <div className="projectText">
                           <ProjectText>
                               LabView based Data Acquisition System (DAQ) working with a Python script to detect if the person 
                               in a front of a camera is wearing covering mask. 
                              <p></p> <span className="TechRaport">Technical raport from this project is also availible on a GitHub!</span>
                           </ProjectText>
                       </div>
                       <div className="ghLINKS">
                             {/* <a href='#' > <TechImg id="Github"></TechImg></a> */}
                         </div>
                       <div className="TechImgContainerExt">
                           <TechImg id="LabView"></TechImg>
                           <TechImg id='Python'></TechImg>
     
                                   </div>
                            </div>)
                            break;
        case('Numerical Methods'):
                            text = (<div onClick ={props.extend}>
                            <h3 className="projectName">{props.name}</h3>
                            <div className="Underline"></div>
                            <div className="projectText">
                                <ProjectText>
                                Programs from a subject called Numerical Methods, in which maths algorithms has been implemented. 
                                They are handling data in arrays and structures, showing dependencies on a graphs, calculating integrals or differential equations.

                        
                                </ProjectText>
                            </div>
                            <div className="ghLINKS">
                                 <a href='https://github.com/wkolo9/NumericalMethods' target="_blank"> <TechImg id="Github"></TechImg></a>
                            </div>
                            <div className="TechImgContainerExt">
                                <TechImg id="C"></TechImg>
                                <TechImg id='Matlab'></TechImg>
          
                                        </div>
                                 </div>)
                                 break;
            }
   
    return(
        <div className="ProjectExtended" onClick ={props.roll}>
        <h3>{text}</h3>
    </div>
    )
}

export default ProjectExtended