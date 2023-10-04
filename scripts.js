// /********************* Exercise 1  **********************/

let numberOfUsers = 15;

function authentication() {
  let numberOfAuthenticatedUsers = 10;
  console.log(numberOfUsers);
  console.log(numberOfAuthenticatedUsers);
}

console.log(numberOfUsers);
// ⭐️15

// console.log(numberOfAuthenticatedUsers);
// ⭐️error code not defined

authentication();

// Explain what will be logged in the console for each of the console logs in the block of code above.

// ⭐️console.log(numberOfUsers); is defined outside of the function so its global not local

// ⭐️console.log(numberOfAuthenticatedUsers); was actually defined inside of the function so it's local





















// /********************* Exercise 2  **********************/

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

//⭐️baseSalary * bonusPercentage = ?
//⭐️baseSalary + 10% bonus = totalSalary



// What is the output?
console.log(calculateTotalSalary(50000));
//⭐️55000




// How would you change the functions so that instead of a global variable the function takes in an argument for the base salary?

function calculateBonus(base) {
  let bonusPercentage = 0.10;
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

// Create a function that can take in a user variable. Return a string that says, "[NAME] lives in [CITY], [COUNTRY]"

function formatUser(userInput) {
   let userString = `${userInput.name} lives in ${userInput.address.city}, ${userInput.address.country}`;
   return userString;
}


console.log(formatUser(user1));
console.log(formatUser(user2));






















 
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

function getNextBookToRead(bookList) {
  let nextBook = bookList;

  return (
    "You should read " +
    nextBook +
    " next. You have " +
    readingList.length +
    " books left on your list!"
  );
}

let nextBookInfo1 = getNextBookToRead(readingList[0]);
let nextBookInfo2 = getNextBookToRead(readingList2[0]);

// Run this code, then get nextBookInfo1 and nextBookInfo2 to log in the console. They are supposed
// to be separate reading lists, but the function is always looking at what's in the first reading
// list.

console.log(nextBookInfo1);
console.log(nextBookInfo2);

// Why? How could you fix this so that the function will work with `readingList` or
// `readingList2`? Please don't change the names of any current identifiers—that is, `readingList`
// and `readingList2` should stay named that.
//⭐️make above changes to show a different rendered reading list




// A hint: the function calls to get nextBookInfo1 and nextBookInfo2 are passing in the values 
// for the reading lists they want to get the next book from.
//⭐️(readingList[0]); & (readingList2[0]





























/********************* Exercise 5  **********************/
// Declare a function named calculateDogAge that:
// Takes 1 argument: your dog's age.
// Calculates your dog's age in human years by multiplying the puppy’s age by 7.
// Returns the result of a string like so: "Your doggie is NN years old in dog years!"
function calculateDogAge(dogAge) {
  let dogAgeInHumanYears = dogAge * 7;
  return `Your dog is ${dogAgeInHumanYears} years old in human years!`;
}



// Call the function three times with different sets of values.
console.log(calculateDogAge(0.6));
console.log(calculateDogAge(4));
console.log(calculateDogAge(7));



// What type of scope are you using to declare the variables? 
//⭐️block .


































/********************* Exercise 6  **********************/
let username = "Lavender";

function showMessage(username) {
  let message = "Hello, " + username;
  alert(message);
}

showMessage("Lavender");



// What would print in the alert message when the following code is executed? Think about it, then run the code to see.
 //⭐️Hello, Lavender // Function searches for local variable before using the Global variable 




// How could we change the code so that we are alerting a message for Lavender? Don't write the string literal "Lavender" a 
// second time (that value already exists if you want to use it again), and don't change the names of any current identifiers 
// (i.e., variables and parameters)—username is a great name for the value globally and in the function!

function showMessage() {
  let message = "Hello, " + username;
  alert(message)
};

showMessage();