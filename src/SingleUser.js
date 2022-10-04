import React from "react";

const SingleUser = (user) => {
  console.log(user);
  const { login, avatar_url, html_url } = user;
  return (
    <article style={{ display: "flex" }}>
      <div>
        <img
          src={avatar_url}
          alt={login}
          height="120px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>
        <h3>{login}</h3>
        <a href={html_url}>
          <button>Profile</button>
        </a>
      </div>
    </article>
  );
};

export default SingleUser;
