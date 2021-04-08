import React, { Component } from 'react'
import axios from 'axios'

export default class User extends Component {
    state = {
        user: null,
    }

    componentDidMount() {
        //fetch user data
        axios.get("https://api.github.com/users/tommycapello")
        .then((res) => {
            console.log(res.data)
            this.setState({
                user:res.data,
            })
        })
        .catch((err) => console.log(err));
    }

    render() {
        //destructure state
        const {user} = this.state;

        if(!user) return <p>Loading data...</p>

        return (
            <div>
                <img style={{width:"150px", borderRadius: "50%"}} src={user.avatar_url} alt={user.name}></img>
                <h3>{user.name}</h3>
                <p>username: {user.login}</p>
                <p>repos: {user.public_repos}</p>
            </div>
        )
    }
}
