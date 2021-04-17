import React, { Component } from 'react';
import "./Backdrop.scss"

class Backdrop extends Component {
    render() { 
        const {click} = this.props
        return ( 
            <div className="backdrop" onClick={click}/>
         );
    }
}
 
export default Backdrop;