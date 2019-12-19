import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Spinner from "./components/layout/Spinner";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");
    console.log(res);

    this.setState({ users: res.data, loading: false });
  }
  render() {
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
