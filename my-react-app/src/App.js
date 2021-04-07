import "./App.css";
import React, { Component } from "react";
import Axios from "axios";

//imported components
import AddUserForm from "./components/AddUser";
import UserCard from "./components/UserCard";
import FollowersList from "./components/FollowersList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "tommycapello",
      gitUser: {},
      followers: [],
      inputValue: "",
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevState) {
    if (prevState.username !== this.state.username) {
      console.log(this.state.userList);
      this.fetchUsers();
    }
  }

  fetchUsers = () => {
    Axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          gitUser: res.data,
        });
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    Axios.get(
      `https://api.github.com/users/${this.state.username}/followers`
    ).then((res) => {
      this.setState({
        followers: res.data,
      });
    });
  };

  addUser = (user) => {
    const newUser = user;
    this.setState({
      username: newUser,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub UserCards</h1>

        <div>
          <AddUserForm addUser={this.addUser} />
        </div>

        <div>
          <h2>Selected Profile</h2>
          <UserCard {...this.state.gitUser} />
        </div>

        <div>
          <h2>Follower Profiles</h2>
          <FollowersList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}