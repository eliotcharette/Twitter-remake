import React from 'react';
import TweetConfirmation from './TweetConfirmation';
import NewTweetForm from './NewTweetForm';
import PropTypes from 'prop-types';

class NewTweetControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTweetForm onNewTweetCreation={this.props.onNewTweetCreation}/>;
    } else {
      currentlyVisibleContent = <TweetConfirmation onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTweetControl.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetControl;
