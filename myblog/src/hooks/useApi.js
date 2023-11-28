import React, { useState, useEffect } from "react";

function useApi(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const result = await response.json();
        setData(result);
        console.log(`result: ${JSON.stringify(result)}`);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export default useApi;
