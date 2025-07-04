import { useState, useEffect } from 'react';

export const useDetails = (id: string) => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/typicode/demo/db`)
      .then(response => response.json())
      .then(data => setDetails(data.details.find((item: any) => item.id === id)));
  }, [id]);

  return details;
};
