/********************* Exercise 1  **********************/

let numberOfUsers = 15;

function authentication() {
  let numberOfAuthenticatedUsers = 10;
  console.log(numberOfUsers);
  console.log(numberOfAuthenticatedUsers);
}

console.log(numberOfUsers);
//console.log(numberOfAuthenticatedUsers);

authentication();

// Explain what will be logged in the console for each of the console logs in the block of code above.







/********************* Exercise 2  **********************/

//let baseSalary = 50000;
//let totalSalary = calculateTotalSalary();

//function calculateBonus() {
  //let bonusPercentage = 0.1; // 10% bonus
  //return baseSalary * bonusPercentage;
//}

//function calculateTotalSalary() {
  //let bonus = calculateBonus();
  //return baseSalary + bonus;
//}

// Call the calculateTotalSalary function. Explain below each of the steps that are taken by the functions.
//console.log(totalSalary);

// What is the output?
//55000



// How would you change the functions so that instead of a global variable the function takes in an argument for the base salary?

function calculateBonus(baseSalary) {
  let bonusPercentage = 0.1; // 10% bonus
  return baseSalary * bonusPercentage;
}

function calculateTotalSalary(baseSalary) {
  let bonus = calculateBonus(baseSalary);
  return baseSalary + bonus;
}

let baseSalary = 50000;
let totalSalary = calculateTotalSalary(baseSalary);

console.log(totalSalary); 


// The first function defines the values for the bonus percentage and the return runs the multiplication equation and returns the value of that (which will be the amount of the bonus)

// The second function defines the variable bonus as the return value from the first function. It then multiplies the base salary outside of the functions by the bonus to calculate the total salary.


/********************* Exercise 3  **********************/

let user1 = {
  name: "Johnny Diaz",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

let user2 = {
  name: "Lupita Davenport",
  age: 30,
  address: {
    city: "London",
    country: "UK",
  },
};

// Create a function that can take in a user variable. Return a string that says, "[NAME] lives in [CITY], [COUNTRY]"

function intro(user) {
  const { name, address } = user;
  const { city, country } = address;

  return `${name} lives in ${city}, ${country}`;
}


console.log(intro(user1));
console.log(intro(user2));


/********************* Exercise 4  **********************/

let readingList = [
  "Anna Karenina",
  "To Kill a Mockingbird",
  "Where the Sidewalk Ends",
  "The Fellowship of the Ring",
  "A Wrinkle in Time",
];

let readingList2 = [
  "The Scar",
  "The Last Unicorn",
  "The Phantom Tollbooth",
  "You Don't Know JS",
];

// function getNextBookToRead() {
//   let nextBook = readingList[0];

//   return (
//     "You should read " +
//     nextBook +
//     " next. You have " +
//     readingList.length +
//     " books left on your list!"
//   );
// }

// let nextBookInfo1 = getNextBookToRead(readingList);
// let nextBookInfo2 = getNextBookToRead(readingList2);

// Run this code, then get nextBookInfo1 and nextBookInfo2 to log in the console. They are supposed
// to be separate reading lists, but the function is always looking at what's in the first reading
// list.

//console.log(getNextBookToRead());

// Why? How could you fix this so that the function will work with `readingList` or 
// `readingList2`? Please don't change the names of any current identifiers—that is, `readingList`
// and `readingList2` should stay named that.
//because it needs to be written as an argument so it works with different lists

// A hint: the function calls to get nextBooInfo1 and
// nextBookInfo2 are passing in the values for the reading lists they want to get the next book
// from.

function getNextBookToRead(readingList) {
  let nextBook = readingList[0];

  return (
    "You should read " +
    nextBook +
    " next. You have " +
    readingList.length +
    " books left on your list!"
  );
}

let nextBookInfo1 = getNextBookToRead(readingList);
let nextBookInfo2 = getNextBookToRead(readingList2);

console.log(nextBookInfo1);
console.log(nextBookInfo2);





/********************* Exercise 5  **********************/
// Declare a function named calculateDogAge that:
// Takes 1 argument: your dog's age.
// Calculates your dog's age in human years by multiplying the puppy’s age by 7.
// Returns the result of a string like so: "Your doggie is NN years old in dog years!"
function calculateDogAge(dogAge) {
  let humanAge = dogAge *7;
  let result = `Your doggie is ${humanAge} years old in dog years!`;
  return result;
}
// Call the function three times with different sets of values.

let dogAge1 = 4;
let dogAge2 = 6;
let dogAge3 = 10;

let result1 = calculateDogAge(dogAge1);
let result2 = calculateDogAge(dogAge2);
let result3 = calculateDogAge(dogAge3);

console.log(result1);
console.log(result2);
console.log(result3);

// What type of scope are you using to declare the variables? 
//local scope




/********************* Exercise 6  **********************/
let username = "Katherine";

function showMessage(username) {
  let message = "Hello, " + username;
  alert(message);
}

showMessage("Dominique");

// What would print in the alert message when the following code is executed? Think about it, then run the code to see.
// "Hello, Dominique"


// How could we change the code so that we are alerting a message for Katherine? Don't write the string literal "Katherine" a second time (that value already exists if you want to use it again), and don't change the names of any current identifiers (i.e., variables and parameters)—username is a great name for the value globally and in the function!
showMessage(username);