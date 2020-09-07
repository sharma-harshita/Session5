import React, { Component } from 'react';
import axios from 'axios';

class AppPost extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            users: []
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                console.log(res);
                this.setState({ users: res.data })
            })
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        // event.preventDefault();
        const user = {
            name: this.state.name
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
            })
    }

    render() {
        console.log("Sttae", this.state);
        return (
            <div>
                {this.state.users.map(value => {
                    return (
                        <div>
                            {value.name}
                        </div>
                    )
                })}
                Name :
                <input type="text" value={this.state.name} onChange={this.handleChange} />
                <button onClick={this.handleSubmit} >Submit</button>
            </div>
        )
    }
}

export default AppPost;


