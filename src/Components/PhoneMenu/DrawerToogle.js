import React from 'react'
import './PhoneMenu.css'
const drawerToogle = (props) => (
    <div 
     onClick={props.clicked} 
    className={'DrawerToggle'}>
       <div></div>
       <div></div>
       <div></div>
    </div>
)
    

export default drawerToogle;