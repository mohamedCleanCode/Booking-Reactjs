import { useEffect, useState } from "react";
import baseUrl from "../base-url/baseUrl";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await baseUrl.get(url);
        setData(res.data);
      } catch (err) {
        setErr(err);
      }
      setLoading(false);
    };
    fetch();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await baseUrl.get(url);
      setData(res);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  };

  return { data, loading, err, reFetch };
};

export default useFetch;
