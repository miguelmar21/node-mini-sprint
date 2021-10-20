const mysql = require('mysql');

var db = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'quoteApp'
});

db.connect((err, res) => {
  if (err) {
    console.log('Ah shit that didnt work')
  } else {
    console.log('Database is connected!')
  }
});

var getAll = function(callback) {
  var queryString = 'SELECT * FROM quotes';
  db.query(queryString, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

var postQuote = function(quote, callback) {
  var queryString = 'INSERT INTO quotes (Quote) VALUE (?)';
  var queryParams = [quote];
  db.query(queryString, queryParams, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

var deleteQuote = function(callback) {
  var queryString = 'DELETE FROM quotes';
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result)
    }
  })
}

var updateQuote = function(params, callback) {
  console.log(params)
  var queryString =
  'UPDATE quotes SET Quote = ? WHERE Quote = ?'
  db.query(queryString, params, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {
  getAll,
  postQuote,
  deleteQuote,
  updateQuote
}
