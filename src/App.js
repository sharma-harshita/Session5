import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/users

class App extends Component {

  constructor(){
    super();
    this.state={
      users:[]
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res=>{
        console.log(res);
        this.setState({users:res.data})
      })
  }

  render() {
    console.log("state", this.state.users);
    return (
      <div>
        Hello
        {this.state.users.map(value=>{
          return(
            <div>
              {value.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default App; 
