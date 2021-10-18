const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept, application/json",
  "access-control-max-age": 10
};

const port = 8080;

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

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
    //YOUR CODE HERE
    console.log('Getting you a random quote...')
    res.writeHead(200, headers);
    var randomQuote = quotes[getRandomInt(0,5)];
    res.end(JSON.stringify(randomQuote));
  }
  // TODO: POST/CREATE
  else if ((req.url == '/quote/' || req.url == '/quote') && req.method == "POST") {
    //YOUR CODE HERE
    console.log('Adding your beautiful quote...');
    var data = '';
    req.on('data', chunk => {
      data += chunk;
    })
    req.on('end', () => {
      var newQuote = JSON.parse(data).quote;
      console.log(newQuote);
      quotes.push(newQuote);
      res.end();
    })
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
