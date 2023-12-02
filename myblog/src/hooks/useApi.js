import { useState, useEffect, useCallback } from "react";

function useApi(endpoint, method = "GET", payload = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
      };

      if (method === "POST" && payload) {
        requestOptions.body = JSON.stringify(payload);
      }

      const response = await fetch(endpoint, requestOptions);
      if (!response.ok) {
        throw new Error(`Network response not ok: ${response.statusText}`);
      }

      if (method === "GET") {
        const result = await response.json();
        setData(result);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [endpoint, method, payload]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useApi;
