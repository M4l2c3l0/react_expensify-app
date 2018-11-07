// ---------- OBJECT DISTRUCTURING

// const person = {
//   name: 'Marcelo',
//   age: 33,
//   location: {
//     city: 'London',
//     temp: 17
//   }
// };
// // const name = person.name;
// // const age = person.age;
// const { name: fname = 'Anonymous', age } = person;
// console.log(`${fname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature)
//   console.log(`It's ${temperature} in ${city}.`);

// const book = {
//   title: 'The Alchemist',
//   author: 'Paulo Coelho',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);



// ---------- ARRAY DISTRUCTURING
const address = [];
const [, , city = 'Lisbon'] = address;
console.log(`You are in ${city}.`);

const item = ['Cappuccino', '£2.10', '£2.50', '£2.80'];
const [drink, , mPrice] = item;
console.log(`A medium ${drink} is ${mPrice}.`)