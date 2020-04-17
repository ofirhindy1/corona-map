import React from 'react';
import './App.css';




export class GetLocation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { userInput: '' };
        
        this.handleUserInput = this.handleUserInput.bind(this);
      }
      
      handleUserInput(e) {
          
        this.setState({userInput: e.target.value});
      }
      
    
      render() {
        return (
          <div>
            <button id= "getIp"> submit</button>
            <h1>{this.state.userInput}</h1>
          </div>
        );
      }
    }

export default GetLocation;
