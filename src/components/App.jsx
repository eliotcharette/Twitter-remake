import React from 'react';
import Header from './Header';
import TweetList from './TweetList';
import { Switch, Route } from 'react-router-dom';
import NewTweetControl from './NewTweetControl';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweetList: []
    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }
  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TweetList tweetList={this.state.masterTweetList} />} />
          <Route path='/newtweet' render={()=><NewTweetControl onNewTweetCreation={this.handleAddingNewTweetToList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
