var numeriVietati = [];
console.log(numeriVietati);

function randomNumeriVietati(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(randomNumeriVietati());

while (numeriVietati.length < 16) {
  var vietato = randomNumeriVietati();

  if (!numeriVietati.includes(vietato)) {
    numeriVietati.push(vietato);
  }
}
