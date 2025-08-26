import { useState, useEffect } from "react";

export default function useGuests(url) {
  const [guests, setGuests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGuests = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setGuests(data.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getGuests();
  }, [url]);

  return { guests, loading, error };
}
