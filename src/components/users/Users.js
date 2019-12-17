import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "40876495",
        login: "joFolta",
        avatar_url: "https://avatars2.githubusercontent.com/u/40876495?v=4",
        html_url: "https://github.com/joFolta"
      },
      {
        id: "10587527",
        login: "MrcRjs",
        avatar_url: "https://avatars2.githubusercontent.com/u/10587527?v=4",
        html_url: "https://github.com/MrcRjs"
      },
      {
        id: "49502261",
        login: "KaiaWalters",
        avatar_url: "https://avatars3.githubusercontent.com/u/49502261?v=4",
        html_url: "https://github.com/KaiaWalters"
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
