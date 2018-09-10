import React from 'react';
import PropTypes from 'prop-types';

function TweetConfirmation(props){
  return (
    <div>
      <p>Are you sure you want to tweet?</p>
      <button className='btn btn-success' onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

TweetConfirmation.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default TweetConfirmation;
