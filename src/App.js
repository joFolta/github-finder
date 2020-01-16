import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);

    this.setState({ users: res.data, loading: false });
  }
  render() {
    // TODO REMOVE LOG
    console.log(
      "REACT_APP_GITHUB_CLIENT_ID",
      process.env.REACT_APP_GITHUB_CLIENT_ID
    );

    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
