import React from 'react';
import Tweet from './Tweet';
import PropTypes from 'prop-types';


class TweetList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleThumbUpClick = this.handleThumbUpClick.bind(this);
    this.handleSortTweets = this.handleSortTweets.bind(this);
    this.handleThumbDownClick = this.handleThumbDownClick.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
  this.handleSortTweets(),
  5000
);
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  handleSortTweets(){
    this.setState(() => {
      this.props.tweetList.sort(compareTweets);
    });
  }

  handleThumbUpClick(key){
    let tempIndex = this.findTweetIndex(key);
    this.setState(() => {
      this.props.tweetList[tempIndex].thumbsUp++;
    });
  }

  handleThumbDownClick(key){
    let tempIndex = this.findTweetIndex(key);
    this.setState(() => {
      this.props.tweetList[tempIndex].thumbsDown++;
    });
  }

  findTweetIndex(key)
  {
    return this.props.tweetList.map((tweet) => { return tweet.id; }).indexOf(key);
  }

  render()  {
    return (
      <div className="row">
        <hr/>
        <div className="col-md-3">
          <h1>Shnert Twitter</h1>
          <h3>I made Shnert twitter in my 3rd year of Utah upper high education place where I got my idea from some goons.</h3>
        </div>
        <div className="col-md-6">
          {this.props.tweetList.map((tweet) =>
            <Tweet name={tweet.name}
              handle={tweet.handle}
              date={tweet.date}
              text={tweet.text}
              thumbsUp={tweet.thumbsUp}
              thumbsDown={tweet.thumbsDown}
              onClickUp={this.handleThumbUpClick}
              onClickDown={this.handleThumbDownClick}
              formattedWaitTime={tweet.formattedWaitTime}
              id={tweet.id}
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

}
TweetList.propTypes = {
  tweetList: PropTypes.array
};

export default TweetList;

function compareTweets(tweetOne,tweetTwo)
{
  return tweetTwo.thumbsUp - tweetOne.thumbsUp;
}
