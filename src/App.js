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
    <main className="bg-slate-200 min-h-screen w-screen">
      <h2 className="pt-8 w-max mx-auto text-4xl font-bold text-red-800">
        random users
      </h2>

      {isLoading ? (
        <h2 className="pt-8 w-max mx-auto text-4xl font-bold text-red-800">
          loading...
        </h2>
      ) : error ? (
        <h2 className="pt-8 w-max mx-auto text-4xl font-bold text-red-800">
          {error}
        </h2>
      ) : (
        <>
          {/* users section */}
          <section className="w-screen flex flex-wrap jusitfy-evenly lg:max-w-[1300px] lg:mx-auto">
            {displayedUsers.map((user) => {
              const { id } = user;
              return <SingleUser key={id} {...user} />;
            })}
          </section>
          {/* end of users section */}

          {/* buttons section */}
          <section className="w-screen text-center py-4">
            <button
              onClick={previousPage}
              className="text-xl font-bold text-red-800 m-1 md:m-2"
            >
              prev
            </button>

            {data?.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => pageNumber(index)}
                  className="border border-solid border-red-800 px-2 rounded-xl text-md text-red-800 font-bold m-1 hover:bg-red-800 hover:text-cyan-200 md:m-2"
                >
                  {index + 1}
                </button>
              );
            })}

            <button
              onClick={nextPage}
              className="text-xl font-bold text-red-800 m-1 md:m-2"
            >
              next
            </button>
          </section>
          {/* end of buttons section */}

          {/* page section */}
          <section className="text-center pb-4">
            <p className="text-xl text-red-800 font-bold">
              page {currentPage + 1}
            </p>
          </section>
          {/* end of page section */}
        </>
      )}
    </main>
  );
}

export default App;
