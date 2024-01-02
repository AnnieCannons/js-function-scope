/********************* Exercise 1  **********************/

let numberOfUsers = 15;

function authentication() {
  let numberOfAuthenticatedUsers = 10;
  console.log(numberOfUsers);
  console.log(numberOfAuthenticatedUsers);
}

console.log(numberOfUsers);
console.log(numberOfAuthenticatedUsers);

authentication();

// Explain what will be logged in the console for each of the console logs in the block of code above.


//The first console.log will log 15.
// The second console.log is commented out because numberOfAuthenticatedUsers is not defined in the global scope.
// The function authentication will log 15 and 10 when called.




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

const totalSalary = calculateTotalSalary();
console.log(totalSalary);

//the first console.log will log 15.
// The second console.log is commented out because numberOfAuthenticatedUsers is not defined in the global scope.
// The function authentication will log 15 and 10 when called.

// What is the output?

//The output will be 55000.



// How would you change the functions so that instead of a global variable the function takes in an argument for the base salary?

function calculateTotalSalaryWithArg(baseSalary) {
  let bonus = calculateBonus();
  return baseSalary + bonus;
}




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


function userLocation(user) {
  return `${user.name} lives in ${user.address.city}, ${user.address.country}`;
}


console.log(userLocation(user1));
console.log(userLocation(user2));



 
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


console.log(nextBookInfo1);
console.log(nextBookInfo2);



/********************* Exercise 5  **********************/
// Declare a function named calculateDogAge that:
// Takes 1 argument: your dog's age.
// Calculates your dog's age in humany years by multiplying the puppy’s age by 7.
// Returns the result of a string like so: "Your doggie is NN years old in dog years!"

// Call the function three times with different sets of values.


function calculateDogAge(dogAge) {
  return "Your doggie is " + (dogAge * 7) + " years old in dog years!";
}

console.log(calculateDogAge(3));
console.log(calculateDogAge(5));
console.log(calculateDogAge(7));

// What type of scope are you using to declare the variables? 


// local scope within the functions


/********************* Exercise 6  **********************/
let username = "Katherine";

function showMessage(username) {
  let message = "Hello, " + username;
  alert(message);
}

showMessage("Dominique");

// What would print in the alert message when the following code is executed? Think about it, then run the code to see.

// To alert a message for Katherine without changing current identifiers,
// we can  call the function without any argument.

// How could we change the code so that we are alerting a message for Katherine? Don't write the string literal "Katherine" a second time (that value already exists if you want to use it again), and don't change the names of any current identifiers (i.e., variables and parameters)—username is a great name for the value globally and in the function!

// This will use the global 'username' variable.

showMessage();  // Alerts "Hello, Katherine"