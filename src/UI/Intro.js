import React, { Component } from 'react'
import Aux from './../hoc/Aux1'
import Backdrop from "./Backdrop";
import Box from './Box'
class Intro extends Component{
    render(){
        return(
                <Aux>
                    <Backdrop show={this.props.show} clicked={this.props.closeIntro}/>
                    <div style={{
                    transform:this.props.show ? 'translateY(0)' :'translateY(-100vh)',
                    opacity: this.props.show ? '1':'0'
                    }}>
                        {this.props.children}
                    </div>
                    <Box show={this.props.show} clicked={this.props.closeIntro}/>
                </Aux>
        )
    }
}
export default Intro;