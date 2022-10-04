import { useState, useEffect, useRef, useCallback } from "react";
import pagination from "./Pagination";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export default function useFetch() {
  // states
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //   fetch function
  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(url);

      // if response.ok doesn't exist (if there's something wrong with the response, other than a wrong URL)
      if (!response.ok) {
        setError("Bad Search Term");
        setData(null);
      } else {
        // if everything is OK
        const userData = await response.json();
        setData(pagination(userData));
      }
    } catch (error) {
      setError("Bad URL");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // useRef setup
  const fetchRef = useRef(false);

  // fetch users
  useEffect(() => {
    if (fetchRef.current === false) {
      fetchRef.current = true;
      fetchUsers();
    }
  }, [fetchUsers]);

  return { data, isLoading, error };
}
