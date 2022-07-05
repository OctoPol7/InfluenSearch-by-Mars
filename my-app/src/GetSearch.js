import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetSearch = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState();

  console.log(props.location);
  
  useEffect(() => {
    async function loadSearch() {
      const part = "snippet";
      const publishedAfter = "2020-06-10T00%3A00%3A00Z";
      const searchPhrase = props.searchPhrase;
      const type = "video";
      const maxResults = "20";
      const orderBy = "viewCount";
      const regionCode = "CA";
      const url = `http://localhost:4000/search/${part}/${searchPhrase}/${type}/${publishedAfter}/${maxResults}/${orderBy}/${regionCode}`;

      await axios
        .get(url)
        .then((resData) => {
          console.log(url);
          console.log(props.searchPhrase);
          props.grabResults(resData);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadSearch();
  }, []);

  //console.log(search);
  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  } else {
    return (
      <>
        <h1>Search Successful!</h1>
      </>
    );
  }
};

export default GetSearch;
