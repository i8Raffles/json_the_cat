const request = require('request');
const breedName = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log("Failed to request details: ", error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Could not find ${breedName}`);
  } else {
    console.log(data[0].description);
  }
});