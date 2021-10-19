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
    this.handleChange = this.handleChange.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div>
        <h1>Enter Your Favorite Quote!</h1>
        <h2 id='quote'></h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}></input>
          <button id="submit">Submit</button>
        </form>
        <div>
          <QuotesRenderer quotes={this.state.quotes}/>
        </div>
      </div>
    )
  }

}

export default App;
