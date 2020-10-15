module.exports = function toReadable (number) {

if (number == undefined || typeof(number) !==  'number') return;

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];

let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];

let numberToString = number.toString();

if (number < 0) throw new Error('Type a positive number');

if (number === 0) return 'null';

if (number  < 20) {
return ones[number];
}

if (numberToString.length === 2) {
return numberToString[1] == 0 ? tens[numberToString[0]] : tens[numberToString[0]]  + ' ' + ones[numberToString[1]];
}

if (numberToString.length == 3) {
return (numberToString[1] === '0' && numberToString[2] === '0') ? (ones[numberToString[0]] + ' ' + 'hundred') : (ones[numberToString[0]] + ' ' + 'hundred' + ' ' +  toReadable(+(numberToString[1] + numberToString[2])));
}

if (numberToString.length === 4) {
let end = +(numberToString[1] + numberToString[2] + numberToString[3]);
if (end === 0) return ones[numberToString[0]] + ' ' + 'thousand';
if (end < 100) return ones[numberToString[0]] + ' ' + 'thousand' + ' ' + toReadable(end);
return ones[numString[0]] + ' ' + 'thousand' + ' ' + toReadable(end);
}
}