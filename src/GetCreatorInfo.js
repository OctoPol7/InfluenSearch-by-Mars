import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const GetCreatorInfo = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [search, setSearch] = useState();

  useEffect(() => {
    async function loadSearch() {
      const channelId = props.channelId;
      const url = `https://influensearch.herokuapp.com/creatordetails/${channelId}`;

      console.log(
        `${channelId}`
      );

      await axios
        .get(url, {
          headers: {
            'Authorization': 'Bearer '+ props.userData.token
          },
        })
        .then((resData) => {
          console.log(url);
          props.grabResults(resData);
          setIsLoading(false);
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

export default GetCreatorInfo;
