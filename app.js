const { scrap } = require("./src/locate.js")
const { riders } = require("./config")
const util = require('util')
const config = require('./config.json')

const apiKey = process.env.DATAWRAPPER_API_KEY;
const apiUrl = `https://api.datawrapper.de/v3/charts/${config.chartID}/data`;

console.log(apiKey)
const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json'
};

// Perform the fetch request
fetch(apiUrl, {
  method: 'GET', // or 'GET' depending on the API
  headers: headers,
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  })
  .then(data => {
    //console.log('Response Data:', data); // Handle the response data
    console.log(util.inspect(data, false, null, true /* enable colors */))

  })
  .catch(error => {
    console.error('Error:', error);
  });


// console.log(datawrapper)

// const url = riders[0].jasen

// scrap(url)