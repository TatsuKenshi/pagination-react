const pagination = (allUsers) => {
  // number of items per page & total number of pages
  const usersPerPage = 10;
  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  // array of arrays (newUsers)
  // we're setting length to totalPages,

  // callback function
  // first parameter is any, marked with _
  // it is an empty item
  // we'll place whatever we're iterating over into it

  //second parameter is index

  const newUsers = Array.from({ length: totalPages }, (_, index) => {
    // first item in each array
    const firstUser = index * usersPerPage;

    // we're returning slices of the initial array which start at the firstUser's index and end before firstUser + usersPerPage
    return allUsers.slice(firstUser, firstUser + usersPerPage);
  });

  // return the new array of arrays
  return newUsers;
};

export default pagination;
