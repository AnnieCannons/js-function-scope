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

// In the first console log, 15 will be logged, because there is no local variable with that name, so it will look outside the function.

// The second one will log 10, that variable name exists within the function.

//the third will log 15, it will look within the scope it was written and point to the variable with a value of 15.

// The last one will output an error, because numberOfAuthenticatedUsers only exists within the function and the console log was written outside of it.






/********************* Exercise 2  **********************/

//let baseSalary = 50000;

//function calculateBonus() {
 // let bonusPercentage = 0.1; // 10% bonus
 // return baseSalary * bonusPercentage;
//}

//function calculateTotalSalary() {
 // let bonus = calculateBonus();
 // return baseSalary + bonus;
//}

// Call the calculateTotalSalary function. Explain below each of the steps that are taken by the functions.

//calculateTotalSalary();

// The first function defines the values for the bonus percentage and the return runs the multiplication equation and returns the value of that (which will be the amount of the bonus)

// The second function defines the variable bonus as the return value from the first function. It then multiplies the base salary outside of the functions by the bonus to calculate the total salary.


// What is the output?

// The output when calculateTotalSalary() is called is 55,000



// How would you change the functions so that instead of a global variable the function takes in an argument for the base salary?

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

// Create a function that can take in a user variable. Return a string that says, "[NAME] lives in [CITY], [COUNTRY]"

function userInformation(nameUser, locationCity, locationCountry) {
  let userMessage = `${nameUser} lives in ${locationCity}, ${locationCountry}`;
  return userMessage;
};

console.log(userInformation(user2.name, user2.address.city, user2.address.country));







 
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

console.log(getNextBookToRead(nextBookInfo1));
console.log(getNextBookToRead(nextBookInfo2));

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






// What type of scope are you using to declare the variables? 


function calculateDogAge(dogAge) {
  let dogAgeInHumanYears = dogAge * 7;
  return `Your dog is ${dogAgeInHumanYears} years old in human years!`;
}
console.log(calculateDogAge(11));
console.log(calculateDogAge(6));
console.log(calculateDogAge(2));

/********************* Exercise 6  **********************/
let username = "Katherine";

function showMessage(username) {
  let message = "Hello, " + username;
  alert(message);
}

//showMessage("Dominique");

// What would print in the alert message when the following code is executed? Think about it, then run the code to see.

//Hello, Dominique, because the same name is used for the parameter and in the message variable, so when the function is called, it will search locally before using an outside variable (in this case Katherine)



// How could we change the code so that we are alerting a message for Katherine? Don't write the string literal "Katherine" a second time (that value already exists if you want to use it again), and don't change the names of any current identifiers (i.e., variables and parameters)—username is a great name for the value globally and in the function!

function showMessage() {
  let message = "Hello, " + username;
  alert(message);
}

//showMessage();