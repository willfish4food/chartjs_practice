import fetch from 'node-fetch';

let labels = [];
let data = [];

async function getData() {
  const response = await fetch('https://www.telran.com/www/test/will2');
  return await response.json();
}

const info = await getData();

console.log(info);

console.log(labels);
console.log(data);

for (var k in info) {
  labels.push(k);
  data.push(info[k]);
}

console.log(labels);
console.log(data);
