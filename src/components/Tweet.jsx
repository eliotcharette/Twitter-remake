import React from 'react';
import PropTypes from 'prop-types';


class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbsUp: 0,
      thumbsDown: 0
    };
    this.handleThumbUpClick = this.handleThumbUpClick.bind(this);
    this.handleThumbDownClick = this.handleThumbDownClick.bind(this);
  }


  handleThumbUpClick(){
    let tryUp = this.state.thumbsUp +1;
    this.setState({thumbsUp: tryUp});
  }
  handleThumbDownClick(){
    let tryDown = this.state.thumbsDown +1;
    this.setState({thumbsDown: tryDown});
  }

  render(){


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
          <h3 className="card-title">{this.props.name}</h3>
          <h4>{this.props.handle}</h4>
          <h4>{this.props.date}</h4>
          <p><em>{this.props.text}</em></p>
          <div className="row">
            <div className="col-md-3">
              <p>{this.state.thumbsUp}</p>
              <p>{this.state.thumbsDown}</p>
            </div>
            <div className="col-md-9">
              <button onClick={this.handleThumbUpClick}>👍</button><br/>
              <button onClick={this.handleThumbDownClick}>👎</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Tweet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  thumbsUp: PropTypes.element,
  thumbsDown: PropTypes.element,
};

export default Tweet;
