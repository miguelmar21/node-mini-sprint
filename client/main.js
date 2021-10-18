$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    var url = 'http://localhost:8080/quote';
    $.ajax({
      url: url,
      type: "GET",
      success: function(result) {
        console.log(result)
        var newDiv = document.createElement('div');
        var newContent = document.createTextNode(`Random quote: ${result}`);
        newDiv.append(newContent);
        document.body.appendChild(newDiv);
      },
      error: function(error) {
        console.log(`Error: ${error}`);
      }
    })
  }

  function addQuote(quote){
    var url = 'http://localhost:8080/quote';
    $.ajax({
      url: url,
      type: "POST",
      data: quote,
      success: function(results){
        console.log('Your beautiful quote: "' + quote + '" is now added to our database')
      },
      error: function(error) {
        console.log(`Erorr: ${error}`);
      }
    })
  }
});
