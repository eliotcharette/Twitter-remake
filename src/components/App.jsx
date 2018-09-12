import React from 'react';
import Header from './Header';
import TweetList from './TweetList';
import { Switch, Route } from 'react-router-dom';
import NewTweetControl from './NewTweetControl';
import Error404 from './Error404';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTweetElapsedWaitTime(),
    60000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updateTweetElapsedWaitTime() {
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.forEach((tweet) =>
      tweet.formattedWaitTime = (tweet.timeOpen).fromNow(true)
    );
    this.setState({masterTweetList: newMasterTweetList});
  }
  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newTweet.formattedWaitTime = (newTweet.timeOpen).fromNow(true);
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }
  render(){
    return (
      <div>
        <Header/>
        <div className="container">

          <Switch>
            <Route exact path='/' render={()=><TweetList tweetList={this.state.masterTweetList} />} />
            <Route path='/newtweet' render={()=><NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList}/>} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
