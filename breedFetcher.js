const request = require('request');
let url = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (breedName, callback)=> {
  let urlBreed = url + breedName;
  request(urlBreed,(error, response, body) => {
    if (error) {
      
      callback(error, null);
      return;
    }
    if (body.length === 0) {
      
      callback('no body', null);
      return;
    }

    const data = JSON.parse(body);
    
    if (data.length === 0) {
    
      let theError = 'Requested breed is not found!';
      callback(theError, null);
      return;
    }
    
    callback(null, data[0].description);
    
  });
};
module.exports = fetchBreedDescription;