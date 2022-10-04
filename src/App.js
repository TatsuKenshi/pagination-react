import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import SingleUser from "./SingleUser";
// import SingleFollower from "./SingleFollower";

function App() {
  // useFetch imports
  const { data, isLoading, error } = useFetch();
  console.log(data);

  // state for the current page and displayed users
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  console.log(displayedUsers);

  useEffect(() => {
    if (!data) return;
    setDisplayedUsers(data[currentPage]);
  }, [isLoading, data, currentPage]);

  return (
    <div className="App">
      {displayedUsers.map((user) => {
        const { id } = user;
        return <SingleUser key={id} {...user} />;
      })}
      <button
        onClick={() => {
          setCurrentPage((prev) => {
            if (prev === 0) {
              setCurrentPage(data.length - 1);
            } else {
              setCurrentPage(currentPage - 1);
            }
          });
        }}
      >
        prev
      </button>
      <br />
      {data?.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(index);
            }}
          >
            {index + 1}
          </button>
        );
      })}
      <br />
      <button
        onClick={() => {
          setCurrentPage((prev) => {
            if (prev === data.length - 1) {
              setCurrentPage(0);
            } else {
              setCurrentPage(currentPage + 1);
            }
          });
        }}
      >
        next
      </button>
    </div>
  );
}

export default App;
