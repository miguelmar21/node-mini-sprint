const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('../server/db/index.js');
const app = express();
const port = 8000;


app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.text());

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
  model.getAll((err, data) => {
    if (err) {
      res.status(404).send('Sorry bud, no quotes for you');
    } else {
      res.status(200).send(data);
    }
  })
})

app.post('/quote', function(req, res) {
  console.log(req.body.Quote);
  model.postQuote(req.body.Quote, (err, data) => {
    if (err) {
      res.status(500).send('Sorry, couldnt get your quote');
    } else {
      res.status(201).send('Got it!');
    }
  })
})

app.delete('/quote', function(req, res) {
  model.deleteQuote((err, result) => {
    if (err) {
      res.status(500).send('Sorry, couldnt delete');
    } else {
      res.status(200).send('Deleted!')
    }
  })
})

app.put('/quote', function(req, res) {
  var params = [req.body.newQuote, req.body.oldQuote];
  console.log(params);
  model.updateQuote(params, (err, result) => {
    if (err) {
      res.status(500).send('alv no good');
    } else {
      res.status(200).send('alv its good!')
    }
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
