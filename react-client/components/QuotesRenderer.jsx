import React from 'react';

function QuotesRenderer(props) {
  return (
    <ul>
      {props.quotes.map((quote, index) => {
        return (
          <li key={index} onClick={props.handleUpdate} value={quote}>{quote}</li>
        )
      })}
    </ul>
  )
}

export default QuotesRenderer;