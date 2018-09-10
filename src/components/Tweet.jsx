import React from 'react';
import PropTypes from 'prop-types';


function Tweet(props) {
  return (
    <div>
      <style global jsx>{`
          body {
            background-color: #b3ecff
          }
        `}
      </style>
      <style>{`
          .card-title {
            background-color: lightgreen;
            font-size: 50px;
            text-align: center;
            margin-bottom: 0px;
          }
      `}
      </style>
      <div className="card">
        <h3 className="card-title">{props.name}</h3>
        <h4>{props.handle}</h4>
        <h4>{props.date}</h4>
        <p><em>{props.text}</em></p>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tweet;
