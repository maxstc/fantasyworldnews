// codes = require("./countrycodes.json");

countries = require("./server/oldcountries.js").countries;

// codesformatted = {};

// for (let i = 0; i < Object.keys(codes).length; i++) {
//   codesformatted[codes[Object.keys(codes)[i]]] = Object.keys(codes)[i];
// }

function getcode(input) {
  codePoints=[];
  codePoints[0]=input[0]+input[1];
  codePoints[1]=input[2]+input[3];
  out = "";
  out += String.fromCharCode(codePoints[0].charCodeAt(1)-56805+64);
  out += String.fromCharCode(codePoints[1].charCodeAt(1)-56805+64);
  console.log(out);
  return out;
}


for (let i = 0; i < countries.length; i++) {
  countries[i]["countrycode"] = getcode(countries[i].flag)
}


// 
// console.log(countries);

const fs = require("fs");
fs.writeFile("./server/countries.js", JSON.stringify(countries, null, 2), err=>{});