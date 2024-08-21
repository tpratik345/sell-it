import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const response = await apiFunc(...args);
      setData(response.data);
      setError(false);
    } catch(error) {
      return setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
};
