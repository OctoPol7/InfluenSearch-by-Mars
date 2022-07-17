import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AddCampaign = (props) => {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    async function newCampaign() {
      const uid = props.userData.uid;
      const token = props.userData.token;
      const url = `http://localhost:4000/campaigns/${uid}/new-campaign`;

      await axios
        .post(url, 
          {
            "campaignName": "New Campaign",
            "description": "This is a test for frontend component",
            "tags": ["frontend","new","campaigns"]
          },
          {
            headers: {
              'Authorization': 'Bearer '+ token
            }
          }
        )
        .then((resData) => {
          console.log(resData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    newCampaign();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {/* <h1>Search Successfull!</h1> */}
      </>
    );
  }
};

export default AddCampaign;