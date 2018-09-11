import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';


function TweetList(props){
  return (
    <div className="row">
      <hr/>
      <div className="col-md-3">

        <h1>Shnert Twitter</h1>
        <h3>I made Shnert twitter in my 3rd year of Utah upper high education place where I got my idea from some goons.</h3>
      </div>
      <div className="col-md-6">
        {props.tweetList.map((tweet) =>
          <Tweet name={tweet.name}
            handle={tweet.handle}
            date={tweet.date}
            text={tweet.text}
            thumbsUp={tweet.thumbsUp}
            thumbsDown={tweet.thumbsDown}
            key={tweet.id}/>
        )}
      </div>
      <div className="col-md-3">
        <h1>You may also like..</h1>
        <h3>@jamesssss</h3>
        <h3>@steveeeeee</h3>
        <h3>@DHam</h3>
      </div>
    </div>
  );
}
TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;
