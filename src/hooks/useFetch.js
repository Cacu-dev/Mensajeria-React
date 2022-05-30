import { useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        let info = data.slice(0, 2);
        setData(info);
      });
  }, [url]);

  return data;
};

export default useFetch;
