// 2.3. Analyses de données

// 2.3.1. Startup Nation
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log('Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ?');
let entrepreneurs19701979 = []
for(let index in entrepreneurs) {

  if(entrepreneurs[index].year >= 1970 && entrepreneurs[index].year <= 1979) {
    entrepreneurs19701979.push(entrepreneurs[index]) 
  }
}
console.log(entrepreneurs19701979);

console.log('Sors une array qui contient le prénom et le nom des entrepreneurs ?');
let entrepreneursfirstlast = []
for(let index in entrepreneurs) {
  entrepreneursfirstlast.push({first: entrepreneurs[index].first, last:entrepreneurs[index].last});
}
console.log(entrepreneursfirstlast);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

let entrepreneursage = [];
var currentyear = 2019
var age = 0
for(let index in entrepreneurs) {
  age = currentyear - entrepreneurs[index].year
  entrepreneursage.push({first: entrepreneurs[index].first, age: age});
}
console.log(entrepreneursage);

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");
let entrepreneursorderlast = []
for(let index in entrepreneurs) {
  entrepreneursorderlast.push(entrepreneurs[index].last) 
}
console.log(entrepreneursorderlast.sort());
