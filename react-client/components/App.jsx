import React from 'react';
import AddQuote from './AddQuote.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        'So it goes...',
        'We are here on this earth to love and be loved',
        'Its just a bad day, not a bad life',
        'The sun never sets on your dreams',
        'Everything worth doing is hard'
      ],
      newQuote: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newQuote: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Nice job Miguel');
    this.setState({
      quotes: [...this.state.quotes, this.state.newQuote]
    })
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <h2 id='quote'></h2>
        <AddQuote handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <div>
          <span>{this.state.quotes[this.getRandomInt(0, this.state.quotes.length)]}</span>
        </div>
      </div>
    )
  }

}

export default App;
