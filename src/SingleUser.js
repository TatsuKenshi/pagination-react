import React from "react";

const SingleUser = (user) => {
  const { login, avatar_url, html_url } = user;

  return (
    <article style={{ display: "flex" }}>
      {/* image section */}
      <div>
        <img
          src={avatar_url}
          alt={login}
          height="120px"
          style={{ borderRadius: "50%" }}
        />
      </div>
      {/* end of image section */}

      {/* info section */}
      <div>
        <h3>{login}</h3>
        <a href={html_url}>
          <button>Profile</button>
        </a>
      </div>
      {/* end of info section */}
    </article>
  );
};

export default SingleUser;
