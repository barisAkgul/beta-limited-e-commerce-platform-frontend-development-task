import { useState, useEffect } from "react";

interface FetchState<T> {
  response: T | null;
  error: Error | null;
  loading: boolean;
}

type RequestCallback<T> = () => Promise<T>;

const useFetch = <T,>(
  requestCallback: RequestCallback<T>,
  fetchData = true
): FetchState<T> => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();
    const signal = abortController.signal;

    const doFetch = async () => {
      setLoading(true);
      try {
        const results = await requestCallback();
        if (mounted && fetchData && !signal.aborted) {
          setResponse(results);
        }
      } catch (e: any) {
        if (mounted && !signal.aborted) {
          setError(e);
        }
      } finally {
        if (mounted && !signal.aborted) {
          setLoading(false);
        }
      }
    };

    if (fetchData) {
      doFetch();
    }

    return () => {
      mounted = false;
      abortController.abort();
    };
  }, []);

  return { response, error, loading };
};

export default useFetch;
