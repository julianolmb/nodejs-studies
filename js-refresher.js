// const person = {
//   name: "Max",
//   age: 29,
//   greet() {
//     console.log("Hi, I am " + this.name);
//   },
// };

// const printName = ({ name }) => {
//   console.log(name);
// };

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// // const copiedPerson = { ...person };
// // console.log(copiedPerson);

// const hobbies = ["Sports", "Cooking"];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));

// const fetchData = (callback) => {
//   setTimeout(() => {
//     callback("done");
//   }, 1500);
// };

// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData((text) => {
//     console.log(text);
//   });
// }, 2000);

const fetchData = (callback) => {
  const promise = new Promise((resolve, reject) => {});
  setTimeout(() => {
    callback("done");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);
