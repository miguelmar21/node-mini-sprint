import React from 'react';

function QuotesRenderer(props) {
  return (
    <ul>
      {props.quotes.map((quote, index) => {
        return (
          <li key={index}>{quote}</li>
        )
      })}
    </ul>
  )
}

export default QuotesRenderer;