import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';

function TweetList(props){
  console.log(props.tweetList);
  return (
    <div>
      <hr/>
      {props.tweetList.map((tweet) =>
        <Tweet name={tweet.name}
          handle={tweet.handle}
          date={tweet.date}
          text={tweet.text}
          key={tweet.id}/>
      )}
    </div>
  );
}
TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
