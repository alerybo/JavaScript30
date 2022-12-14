// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); //100 100
age = 200;
console.log(age, age2); //200 100

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(players, team); //["Wes", "Sarah", "Ryan", "Poppy"] ["Wes", "Sarah", "Ryan", "Poppy"]

// You might think we can just do something like this:
team[3] = "Lux";

// however what happens when we update that array?
console.log(players, team); //["Wes", "Sarah", "Ryan", "Lux"] ["Wes", "Sarah", "Ryan", "Lux"]

//we have edited the original array too
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = Array.from(players);
//or use slice and return a whole new array
const team3 = players.slice();
// or create a new array and concat the old one in
const team4 = [].concat(players);
// or use the new ES6 Spread
const team5 = [...players];
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.age = 99;
console.log(person.age); //99
// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 99 });
// Spread operator:
const captain3 = { ...person, age: 99 };


// Things to note - this is only 1 level deep - both for Arrays and Objects. 
//lodash has a cloneDeep method, but you should think twice before using it.
