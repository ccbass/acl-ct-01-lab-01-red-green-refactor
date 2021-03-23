const fetch = require('node-fetch');


const fetchQuotes = async() => {
    
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes/1');
  const quote = await response.json();

  return quote[0];

};


module.exports = fetchQuotes;
