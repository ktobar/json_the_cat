const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';
let userInput = url + process.argv.slice(2);
//console.log('userInput :', userInput);

request(userInput,(error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log(error);
  }
  if (body === []) {
    console.log('Requested breed is not found!');
  } else {
    console.log(data[0].description);
  }
  //console.log(typeof data);
});

