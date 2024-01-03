#!/usr/bin/node

const argv = process.argv;
const request = require('request');

request(`https://swapi-api.alx-tools.com/api/films/${argv[2]}`, function (error, response, body) {
  console.log(error || JSON.parse(body).title);
});
