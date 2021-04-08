import React, { Component } from 'react'
import axios from 'axios';

export default class Followers extends Component {
    state = {
        followers: []
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/tommycapello/followers`)
        .then((res) => {
            console.log(res.data)
            this.setState({
                followers: res.data
            })})
        .catch(err => console.log(err))
    }
    render() {
        const {followers} = this.state;
        if(followers.length === 0) return <p>Loading Followers...</p>
        return (
            <div className="followers">
                {followers.map(follower => (
                    <div key={follower.id} className="follower-card">
                        <img style={{width:"80px", borderRadius:"50%"}} src={follower.avatar_url} alt={follower.login}/>
                        <h4>{follower.login}</h4>
                     </div>))}
            </div>
        )
    }
}
