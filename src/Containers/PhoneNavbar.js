import React from 'react';
import { Component } from 'react';
import SideDrawer from '../Components/PhoneMenu/SideDrawer';
import DrawerToogle from './../Components/PhoneMenu/DrawerToogle'
import Aux from '../hoc/Aux1'
class PhoneNavbar extends Component {
    state= {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHander = () =>{
        this.setState( (prevState) =>{
          return{  showSideDrawer: !prevState.showSideDrawer} }  )
    }
    render(){
        let phoneMenu= null;
        if(this.state.showSideDrawer){
            phoneMenu=<SideDrawer click={this.sideDrawerToggleHander}></SideDrawer>
        }
    return (
        <Aux>
        <div className='PhoneNavbar'>
            <DrawerToogle clicked={this.sideDrawerToggleHander}></DrawerToogle>
            {phoneMenu}
        </div>
       
        </Aux>
    );
};}

export default PhoneNavbar;