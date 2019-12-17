import React from "react";
import PropTypes from "prop-types";

//        const UserItem = (props) => {
//         const { login, avatar_url, html_url } = props.user;
// CLEANER DESTRUCTING BELOW...

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div>
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>

        <div>
          <a
            href={html_url}
            className="btn btn-dark btn-sm my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            More
          </a>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
