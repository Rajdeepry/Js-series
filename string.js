const name = "raj"
const repocount = 50

console.log(name + repocount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Rajdeep')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.indexOf('t'));

const newString = gameName.substring(5, 4)
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringone =  "      Raj    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "www.linkedin.com/in/rajdeep-choudhury-developer"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'));