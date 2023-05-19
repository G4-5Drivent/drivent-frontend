import { useState, useEffect } from 'react';

export default function useAsync(handler, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  // eslint-disable-next-line space-before-function-paren
  const act = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      console.log('Data received:', data); // new debug line
      return data;
    } catch (err) {
      console.log('Caught an error:', err); // new debug line
      setError(err);
      setLoading(false);
      //throw err;
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
