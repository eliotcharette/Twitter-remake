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
        <div className="row">
          <div className="col-md-3">
            <p>{props.thumbsUp}</p>
            <p>{props.thumbsDown}</p>
          </div>
          <div className="col-md-9">
            <button onClick={()=>props.onClickUp(props.id)}>👍</button><br/>
            <button onClick={()=>props.onClickDown(props.id)}>👎</button>
          </div>
        </div>
      </div>
    </div>
  );
}
Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbsUp: PropTypes.number,
  thumbsDown: PropTypes.number,
  id: PropTypes.string,
  onClickUp: PropTypes.func,
  onClickDown: PropTypes.func,
};

export default Tweet;
