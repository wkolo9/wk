import React from 'react'
import  './Backdrop.css'
import boxPic from './../Img/note.png'
const box=(props)=>(
   props.show ? <div className="Box"onClick={props.clicked}> <img src={boxPic} alt="LoadingError:ClickToContinue"></img>
   </div> : null

);

export default box;