import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import SingleUser from "./SingleUser";

function App() {
  // useFetch imports
  const { data, isLoading, error } = useFetch();

  // state for the current page and displayed users
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  // previous, next, page number button functions
  const previousPage = () => {
    setCurrentPage((prev) => {
      if (prev === 0) {
        setCurrentPage(data.length - 1);
      } else {
        setCurrentPage(currentPage - 1);
      }
    });
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      if (prev === data.length - 1) {
        setCurrentPage(0);
      } else {
        setCurrentPage(currentPage + 1);
      }
    });
  };

  const pageNumber = (index) => {
    setCurrentPage(index);
  };

  // useEffect to set the displayedUsers state
  useEffect(() => {
    if (isLoading) return;
    setDisplayedUsers(data[currentPage]);
  }, [isLoading, data, currentPage]);

  return (
    <main className="App">
      <h2>Random Users</h2>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          {/* users section */}
          <section>
            {displayedUsers.map((user) => {
              const { id } = user;
              return <SingleUser key={id} {...user} />;
            })}
          </section>
          {/* end of users section */}

          {/* buttons section */}
          <section>
            <button onClick={previousPage}>prev</button>

            {data?.map((item, index) => {
              return (
                <button key={index} onClick={() => pageNumber(index)}>
                  {index + 1}
                </button>
              );
            })}

            <button onClick={nextPage}>next</button>
          </section>
          {/* end of buttons section */}
        </>
      )}
    </main>
  );
}

export default App;
