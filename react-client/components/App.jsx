import React from 'react';
import QuotesRenderer from './QuotesRenderer.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      newQuote: ''
    }
    this.getQuotes = this.getQuotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.getQuotes()
  }

  getQuotes() {
    axios.get('http://localhost:8000/quote')
      .then(data => {
        var quotes = [];
        data.data.forEach(obj => {
          quotes.push(obj.Quote);
        })
        this.setState({
          quotes: quotes
        })
      })
      .catch(err => {
        console.log('OOPS HEHE')
      })
  }

  handleClick(e) {
    axios.delete('http://localhost:8000/quote')
      .then(data => {
        this.getQuotes();
      })
      .catch(err => {
      })
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      newQuote: e.target.value
    })
  }

  handleSubmit(e) {
    axios.post('http://localhost:8000/quote', {
      Quote: this.state.newQuote
    })
    .then(res => {
      console.log(response);
      this.setState({
        newQuote: ''
      })
      this.getQuotes()
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleUpdate(e) {
    console.log(e);
    axios.put('http://localhost:8000/quote', {
      oldQuote: e.target.innerHTML,
      newQuote: this.state.newQuote
    })
    .then(res => {
      console.log('updated!')
      this.getQuotes();
    })
    .catch(err => {
      console.log('Failed!')
    })
  }

  render() {
    return (
      <div>
        <h1>Enter Your Favorite Quote!</h1>
        <p>You can type on this form and then click on a quote to update it!</p>
        <h2 id='quote'></h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button id="submit">Submit</button>
        </form>
        <div>
          <QuotesRenderer quotes={this.state.quotes}
           handleClick={this.handleClick}
           handleUpdate={this.handleUpdate}
          />
        </div>
        <button id="delete" onClick={this.handleClick}>Delete All Quotes</button>
      </div>
    )
  }

}

export default App;
