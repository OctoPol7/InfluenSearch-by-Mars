import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetSearch = (props) => {
  const [isLoading, setLoading] = useState(true);
  // const [search, setSearch] = useState();

  useEffect(() => {
    async function loadSearch() {
      const url = `http://localhost:4000/getCreatorDetails/${props.channelId}`;

      await axios
        .get(url)
        .then((resData) => {
          console.log(url);
          props.grabResults(resData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  } else {
    return <>{/* <h1>Search Successful!</h1> */}</>;
  }
};

export default GetSearch;