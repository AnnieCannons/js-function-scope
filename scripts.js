/********************* Exercise 1  **********************/

let numberOfUsers = 15;//global scope

function authentication() {
  let numberOfAuthenticatedUsers = 10;//local scope
  console.log(numberOfUsers);// 15. It is defined outside of the function
  console.log(numberOfAuthenticatedUsers);// 10. defined in the function
}

console.log(numberOfUsers);//15
//console.log(numberOfAuthenticatedUsers);//error. not defined outside of the function

authentication();

// Explain what will be logged in the console for each of the console logs in the block of code above.

/********************* Exercise 2  **********************/

let baseSalary = 50000;

function calculateBonus() {
  let bonusPercentage = 0.1; // 10% bonus
  return baseSalary * bonusPercentage;
}

function calculateTotalSalary() {
  let bonus = calculateBonus();
  return baseSalary + bonus;
}

// Call the calculateTotalSalary function. Explain below each of the steps that are taken by the functions.

calculateTotalSalary();
//calculateBonus function is multiplying the baseSalary and BonusPercentage to return the product
//calculateTotalSalary is combining the baseSalary plus the bonus from the previous function.

// What is the output?
console.log(calculateTotalSalary());
//55000



// How would you change the functions so that instead of a global variable, the function takes in an argument for the base salary?
function calculateBonus(base) {
  let bonusPercentage = 0.1; // 10% bonus
  return base * bonusPercentage;
}

function calculateTotalSalary(base) {
  let bonus = calculateBonus(50000);
  return base + bonus;
}

console.log(calculateTotalSalary(50000));

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

// Create a function that can take in a user variable. 
//Return a string that says, "[NAME] lives in [CITY], [COUNTRY]"

function users(user) {
  let userString = `${user.name} lives in ${user.city}, ${user.country}`;
  return userString;
};

console.log(users(user1.name, user1.address.city,user1.address.country));

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

function getNextBookToRead() {
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

// Run this code, then get nextBookInfo1 and nextBookInfo2 to log in the console. They are supposed
// to be separate reading lists, but the function is always looking at what's in the first reading
// list.

// Why? How could you fix this so that the function will work with `readingList` or
// `readingList2`? Please don't change the names of any current identifiers—that is, `readingList`
// and `readingList2` should stay named that.

// A hint: the function calls to get nextBooInfo1 and
// nextBookInfo2 are passing in the values for the reading lists they want to get the next book
// from.






/********************* Exercise 5  **********************/
// Declare a function named calculateDogAge that:
// Takes 1 argument: your dog's age.
// Calculates your dog's age in humany years by multiplying the puppy’s age by 7.
// Returns the result of a string like so: "Your doggie is NN years old in dog years!"

// Call the function three times with different sets of values.

function calculateDogAge(dogAge) {
  let dogAgeHumany = dogAge * 7;
  return (`Your doggie is ${dogAgeHumany} years old in human years`)
};

console.log(calculateDogAge(4));
console.log(calculateDogAge(6));
console.log(calculateDogAge(7));



// What type of scope are you using to declare the variables? 





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
function showMessage() {
  let message = "Hello, " + username;
  alert(message);
}
console.log(showMessage());