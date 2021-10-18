const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.text());

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'So it goes...',
  'We are here on this earth to love and be loved',
  'Its just a bad day, not a bad life',
  'The sun never sets on your dreams',
  'Everything worth doing is hard'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

app.get('/', function(req, res) {
  console.log('redirecting');
  res.redirect(`http://localhost:${port}/quote`);
  res.end();
})

app.get('/quote', function(req, res) {
  res.status(200).send(quotes[getRandomInt(0, quotes.length)]);
})

app.post('/quote', function(req, res) {
  console.log(req.body);
  quotes.push(req.body);
  res.status(201).send('Nice quote!');
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
