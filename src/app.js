const greeting = 'Hello World';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');

import moment from 'moment';

console.log('Why are we here?');
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);