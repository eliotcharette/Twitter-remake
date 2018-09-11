import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTweetForm(props){
  let _name = null;
  let _handle = null;
  let _date = null;
  let _text = null;
  let _thumbsUp = 0;
  let _thumbsDown = 0;

  function handleNewTweetFormSubmission(event) {
    event.preventDefault();
    props.onNewTweetCreation({name: _name.value, handle: _handle.value, date: _date.value, text: _text.value, thumbsUp: _thumbsUp, thumbsDown: _thumbsDown, id: v4()});
    _name.value = '';
    _handle.value = '';
    _date.value = '';
    _text.value = '';
    _thumbsUp = 0;
    _thumbsDown = 0;
  }
  return (
    <div>
      <style jsx>{`
        input {
          width: 47.2%;
          padding: 10px 20px;
          margin: 15px 15px;
          box-sizing: border-box;
        }
        button {
          margin: 15px 25px;
          padding: 15px 15px;
        }
        textarea {
          margin 20px 15px;
          padding: 10px 20px;
          box-sizing: border-box;
        }
            `}</style>
      <div>
        <form onSubmit={handleNewTweetFormSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}}/>
          <input
            type='text'
            id='handle'
            placeholder='@example'
            ref={(input) => {_handle = input;}}/>
          <input
            type='text'
            id='date'
            placeholder='Sept 8'
            ref={(input) => {_date = input;}}/>
          <textarea
            id='text'
            placeholder='Share something'
            ref={(textarea) => {_text = textarea;}}/>
          <button type='submit' className='btn btn-info'>Share</button>
        </form>
      </div>
    </div>
  );
}
NewTweetForm.propTypes = {
  onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;
