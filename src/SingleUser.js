import React from "react";

const SingleUser = (user) => {
  const { login } = user;
  return <div>{login}</div>;
};

export default SingleUser;
