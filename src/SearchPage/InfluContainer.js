import React from 'react'
import InfluCard from './InfluCard';
import GetTrending from '../GetTrending'
import { useState } from "react";


const InfluContainer = props => {

    const [results, setResults] = useState([]);

    const grabResults = (resData) => {
      console.log("FROM ResultPage ");
      console.log(resData.data);
      setResults(resData.data);
    };

    return (
      <div className='trending-influencers'>
        <h1>
          Trending Influencers this week
        </h1>
        <GetTrending grabResults={grabResults} />
        <ul className='first-ul'>
          {results.map((result) => (
            <InfluCard
              sub_count={result.statistics.subscriberCount}
              video_count={result.statistics.videoCount}
              influ_name={result.brandingSettings.channel.title}
              influ_img={result.snippet.thumbnails.default.url}
              topic_ids={result.topicDetails.topicIds}
            />
          ))}
        </ul>

      </div>
    );
}



export default InfluContainer;