import { useState, useEffect } from "react";

const DATA_URL = "http://localhost:3000/api";

function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${DATA_URL}${url}`, options);
        const { availableSlots } = await response.json();
        setData(availableSlots);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        const message = `Error fetching data from ${url}: ${error.message}`;
        setError(error);
        throw new Error(message);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, isLoading, error };
}

export default useFetch;
