import React from 'react';
import ReactImg from './../../Img/react.png'
import CssImg from './../../Img/css.png'
import NodeImg from './../../Img/node.png'
import sqlImg from './../../Img/mysql.png'
import firebaseImg from './../../Img/firebase.png'
import dockerImg from './../../Img/docker.png'
import labview from './../../Img/labview.png'
import pythonImg from './../../Img/python.png'
import postmanImg from './../../Img/postman.png'
import jsImg from './../../Img/js.png'
import htmlImg from './../../Img/html.png'
import phpImg from './../../Img/php.png'
import cImg from './../../Img/C.png'
import arduinoImg from './../../Img/arduino.png'
import matlabImg from './../../Img/matlab.png'
import github from './../../Img/github.png'
import web from './../../Img/web.png'


import Aux from '../../hoc/Aux1'
const TechImg = (props) => {
    let img=null;
    switch(props.id){
        case 'React':
            img= <img className="TechImg" title={props.id} src={ReactImg} alt="LoadingError"></img>
        break;
        case 'Github':
            img= <img className="TechImg" title={props.id} src={github} alt="LoadingError"></img>
        break;
        case 'Check It Online!':
            img= <img className="TechImg" title={props.id} src={web} alt="LoadingError"></img>
        break;
        case 'CSS':
            img= <img className="TechImg" title={props.id} src={CssImg} alt="LoadingError"></img>
        break;
        case 'NodeJS':
            img= <img className="TechImg" title={props.id} src={NodeImg} alt="LoadingError"></img>
        break;
        case 'MySql':
            img= <img className="TechImg" title={props.id} src={sqlImg} alt="LoadingError"></img>
        break;
        case 'Firebase':
            img= <img className="TechImg" title={props.id} src={firebaseImg} alt="LoadingError"></img>
        break;
        case 'Docker':
            img= <img className="TechImg" title={props.id} src={dockerImg} alt="LoadingError"></img>
        break;
        case 'LabView':
            img= <img className="TechImg" title={props.id} src={labview} alt="LoadingError"></img>
        break;
        case 'Python':
            img= <img className="TechImg" title={props.id} src={pythonImg} alt="LoadingError"></img>
        break;
        case 'Postman':
            img= <img className="TechImg" title={props.id} src={postmanImg} alt="LoadingError"></img>
        break;
        case 'JavaScript':
            img= <img className="TechImg" title={props.id} src={jsImg} alt="LoadingError"></img>
        break;
        case 'HTML':
            img= <img className="TechImg" title={props.id} src={htmlImg} alt="LoadingError"></img>
        break;
        case 'php':
            img= <img className="TechImg" title={props.id} src={phpImg} alt="LoadingError"></img>
        break;
        case 'C':
            img= <img className="TechImg" title={props.id} src={cImg} alt="LoadingError"></img>
        break;
        case 'Arduino':
            img= <img className="TechImg" title={props.id} src={arduinoImg} alt="LoadingError"></img>
        break;
        case 'Matlab':
            img= <img className="TechImg" title={props.id} src={matlabImg} alt="LoadingError"></img>
        break;
    }


    return (
        <Aux>
            {img}
        </Aux>
    );
};

export default TechImg;