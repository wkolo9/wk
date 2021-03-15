import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import Navbar from './Containers/Navbar'
import Intro from './UI/Intro'
import React, { Component } from 'react';
import MainContainer from './Containers/MainContainer'
import {Route, Switch} from 'react-router-dom'
import {    BrowserRouter    }from 'react-router-dom'
import PhoneNavbar from './Containers/PhoneNavbar'
class App extends Component{
  state={
   firstTime: true
}
closeIntroHandler= ()=>{
  this.setState({firstTime:false})
}
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <PhoneNavbar/>
        <Intro show={this.state.firstTime} closeIntro = {this.closeIntroHandler}>
        </Intro>
       <MainContainer>
         </MainContainer> 
         <MessengerCustomerChat
            pageId="104085775087878"
            appId="<450054202704906>"
        />
      </div>
      </BrowserRouter>
    );
  }
  }
  

export default App;
