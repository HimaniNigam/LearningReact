import React, { Component } from 'react';
import Display from './Display';


class Clock extends Component {

    constructor() {
        super();
        
        this.state = {
            date: new Date()            
        };       
        
    }

    componentDidMount() {
        this.startTime();
    }


    startTime() {        
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date()}));
        }, 1000);
    }   
    

    render() {
        return (
            <div>
              
                <Display date={this.state.date}  /> 
            </div>
        );
    }
}

export default Clock;