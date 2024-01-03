#!/usr/bin/node

const argv = process.argv;
const request = require('request');

request(`${argv[2]}`, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const tasks = JSON.parse(body);
    const complatedTasks = {};
    tasks.forEach(task => {
      if (task.completed && complatedTasks[task.userId] === undefined) {
        complatedTasks[task.userId] = 1;
      } else if (task.completed) {
        complatedTasks[task.userId] += 1;
      }
    });
    console.log(complatedTasks);
  }
});
