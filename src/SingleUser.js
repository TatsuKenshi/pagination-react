import React from "react";

const SingleUser = (user) => {
  const { login, avatar_url, html_url } = user;

  return (
    <article className="max-w-[350px] min-w-[300px] mx-auto my-2 bg-cyan-200 rounded-lg hover:drop-shadow-xl sm:max-w-[300px] hover:scale-95">
      {/* image section */}
      <div>
        <img
          src={avatar_url}
          alt={login}
          className="min-w-[90%] w-[270px] rounded-[50%] mx-auto mt-4"
        />
      </div>
      {/* end of image section */}

      {/* info section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-red-800">{login}</h3>
        <a href={html_url}>
          <button className="border border-solid border-red-800 px-8 rounded-xl text-xl font-bold mb-2 text-red-800 bg-slate-200 hover:bg-red-800 hover:text-cyan-200">
            profile
          </button>
        </a>
      </div>
      {/* end of info section */}
    </article>
  );
};

export default SingleUser;
