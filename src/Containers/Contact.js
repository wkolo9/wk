import React from 'react';
import Aux from '../hoc/Aux1'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import './Contact.css';
import { Component } from 'react';
init("user_YCZuBRbxM97rWVGCc1CGH");
class Contact extends Component {
    state={
        showSendProtocol: true,
    }

     toggleProtocol = ()=>{
        this.setState({showSendProtocol: false})
    }
     sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_9jui70k', 'template_of4soy8', e.target)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          this.toggleProtocol();
      }

            
      render(){
       let sendprotocol=  <div className='ContactDiv'>
        <form className="contact-form" onSubmit={this.sendEmail}>
            {/* <input type="hidden" name="contact_number" /> */}
            <label>Name</label><p></p>
            <input type="text" className="Input" name="user_name" />
            <p></p><p></p><p></p>
            <p></p>
            <label>Yours email</label>
            <p></p>
            <input type="email" className="Input" name="user_email" />
            <p></p>
            <label>Message to send</label><p></p>
            <textarea name="message" className='MessageArea'/><p></p>
            {/* <div onClick={this.toggleProtocol}> */}
            <input type="submit" className="Send" value="Send" />
            {/* </div> */}
        </form>
     </div>
     if(!this.state.showSendProtocol){
      sendprotocol=<div className='thxDiv'>Thank you for contacting me,<br></br> I will reply as soon as possible!<br></br></div>;
     }
    return ( 
        <Aux>
            <div className='HeaderCV'>
                You can contact me by clicking the Facebook's Messenger icon in the bottom right corner
                or use the form below to send me an email.
            </div>
                {sendprotocol}
        </Aux>
    )
}}

export default Contact;