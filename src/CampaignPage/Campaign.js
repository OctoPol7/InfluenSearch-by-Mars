import React, { useState, useRef } from 'react'
import Header from '../header.js'
import Checkboxx from './Checkboxx'
import CampStatContnr from './CampStatContner';
import CreateBtn from './CreateBtn';
import CurCampContner from './CurCampContnr';
import axios from 'axios';
import CloseIcon from '../CloseIcon.png'
import GetCampaigns from '../GetCampaigns'




const Campaign = props => {

  const campaignNameRef = useRef();
  const descriptionRef = useRef();
  
  const [tags, setTags] = useState([]);
  const [results, setResults] = useState();
  const [resultsLength, setResultsLength] = useState();
  const [message, setMessage] = useState();
  const [modalShow, setModalShow] = useState(false);

    const showmodal = () => {
        setModalShow(prevState=> !prevState);
    }

    const onCreateHandler = (e) => {
      e.preventDefault();

      const newCampaign = {
        campaignName: campaignNameRef.current.value,
        description: descriptionRef.current.value,
        tags: tags,
      };
      
           const uid = props.userData.uid;
           const token = props.userData.token;
           const url = `https://influensearch.herokuapp.com/campaigns/${uid}/new-campaign`;

          axios
             .post(url, newCampaign, {
               headers: {
                 Authorization: "Bearer " + token,
               },
             })
             .then((resData) => {
               console.log(resData.data.message);
               showmodal();
             })
             .catch((error) => {
               console.log(error);
             });
         }

    const keywordArrayCB = [
      {name:"Lifestyle",
      cbid:"/m/019_rr"},

      {name:"Music",
      cbid:"/m/04rlf"},

      {name:"Entertainment",
      cbid:"/m/02jjt"},

      {name:"Gaming",
      cbid:"/m/0bzvm2"},

      {name:"Sport",
      cbid:"/m/06ntj"},

      {name:"Tourism",
      cbid:"/m/07bxq"},

      {name:"Technology",
      cbid:"/m/07c1v"},

      {name:"Health",
      cbid:"/m/0kt51"},

      {name:"Food",
      cbid:"/m/02wbm"},

      {name:"Beauty",
      cbid:"/m/041xxh"}
    ]

    const checkboxHandler = (e) => {
        if (e.target.checked) {
            console.log('checked ' + e.target.value);
            setTags(prevState => [...prevState, e.target.value]);

        } else {
            console.log("unchecked " + e.target.value);
            let newArray = [];
            tags?.map((tag)=>{
              if (tag!==e.target.value) {
                newArray.push(e.target.value);
              }
            })
            setTags(newArray)
        }
    }

    const grabCampaigns = (resData) => {
      console.log("FROM Campaign.js ");
      console.log(resData.data);
      setResults(resData.data);
      setResultsLength(resData.data.length)
      setMessage(resData.message);
    };

    let counter=0;

    const activeCount = () => {
      
      for(let i=0; i < results.length; i++){
        if (results[i].active === true) {
          counter++;
        }
      }
      console.log(counter);
    }
    



    return (
      <div className="campaign-page">
        <Header userData={props.userData} />
        <GetCampaigns userData={props.userData} grabCampaigns={grabCampaigns} />
        {results == null ? <></> : activeCount()}
        <div className='campaign-page-background'>
        <div className='max-width'>
        <CampStatContnr allCam={resultsLength} active={counter} />
        <CurCampContner
          campaignArray={results}
          grabCampData={props.grabCampData}
        />

        <CreateBtn click={() => showmodal()} />

        {modalShow ? (
          <div className="modal_overlay">
            <div className="modal_content">
              <div className='modal-grid'>
                <h2>Create a campaign</h2>
                <button type="button" className='close-button' onClick={() => showmodal()}>
                  <img src={CloseIcon} alt="Close"></img>
                </button>
              </div>

              <form className="contnr" onSubmit={onCreateHandler}>
                <label className="modal_inputs">

                  Name your Campaign:
                </label>


                  <input
                    className="modal_search_input"
                    type="text"
                    name="name"
                    placeholder="Campaign name"
                    ref={campaignNameRef}
                  />
              
                <label>

                  Description:

                  </label>

                  <textarea
                    placeholder="This is a new campaign"
                    rows={5}
                    ref={descriptionRef}
                  ></textarea>
                

                <label className="modal_inputs">
                  Add tags or keywords
                  </label>

                  {keywordArrayCB?.map((keyword) => (
                    <Checkboxx
                      name={keyword.name}
                      id={keyword.cbid}
                      checkboxHandler={checkboxHandler}
                    />
                  ))}
              

                <div className='center-button'>
                <button className="cbtn" type="submit">
                  Create Campaign
                </button>
                </div>
  
              </form>
              {message}
            </div>
          </div>
        ) : null}
      </div>

      </div>
      </div>
    )
  }

export default Campaign;