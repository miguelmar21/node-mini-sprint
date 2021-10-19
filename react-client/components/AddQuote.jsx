import React from 'react';

var AddQuote = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type='text' onChange={props.handleChange}></input>
    <button id='submit'>Submit</button>
    <p id='response'></p>
  </form>
);

export default AddQuote;