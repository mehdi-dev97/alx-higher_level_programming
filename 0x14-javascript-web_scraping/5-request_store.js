#!/usr/bin/node

const argv = process.argv;
const request = require('request');
const fs = require('fs');

request(`${argv[2]}`, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    fs.writeFile(argv[3], body, 'utf-8', error => {
      if (error) {
        console.log(error);
      }
    });
  }
});
