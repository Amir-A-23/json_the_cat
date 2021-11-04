const request = require('request');
const args = process.argv.slice(2);

console.log(args);
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //console.log(typeof(body));
  if (body === null) {
    console.log("The breed is not found"); //check if breed is found
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
  //console.log(typeof data);

});