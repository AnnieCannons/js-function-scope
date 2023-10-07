/********************* Exercise 1  **********************/

let numberOfUsers = 15;

function authentication() {
  let numberOfAuthenticatedUsers = 10;
  console.log(numberOfUsers);
  console.log(numberOfAuthenticatedUsers);
}

console.log(numberOfUsers);
// console.log(numberOfAuthenticatedUsers);

authentication();

// Explain what will be logged in the console for each of the console logs in the block of code above.

// the console log on line 7  and 11 are  console logging the global variable .while the console log on line 8 is console logging the local variable, But the console logs on line 7 and 8 won't run with out line 14 .       





/********************* Exercise 2  **********************/

let baseSalary = 50000;


function calculateBonus(salary) {
  let bonusPercentage = 0.1; // 10% bonus
  return salary * bonusPercentage;
}

function calculateTotalSalary(salary) {
  let bonus = calculateBonus(salary);
  return salary + bonus;
}

// Call the calculateTotalSalary function. Explain below each of the steps that are taken by the functions.

calculateTotalSalary(5)
console.log(calculateTotalSalary(25))
// baseSalary is declared and assigned a value of 50000.

// The calculateBonus function takes a salary argument, calculates a bonus of 10% of the salary, and returns the bonus amount.

// The calculateTotalSalary function takes a salary argument, calls calculateBonus with the given salary, adds the bonus to the original salary, and returns the total salary.




// What is the output?

// 55,000


// How would you change the functions so that instead of a global variable the function takes in an argument for the base salary?


function calculateBonus(salary) {
  let bonusPercentage = 0.1; // 10% bonus
  return baseSalary * bonusPercentage;
}

function calculateTotalSalary(salary) {
  let bonus = calculateBonus(salary);
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

function userInfo(user){
  return `${user.name} lives in ${user.address.city},${user.address.country}`
}
console.log(userInfo(user1))
console.log(userInfo(user2))



 
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
console.log(nextBookInfo1)
console.log(nextBookInfo2)
// Run this code, then get nextBookInfo1 and nextBookInfo2 to log in the console. They are supposed

// to be separate reading lists, but the function is always looking at what's in the first reading
// list.

// Why? How could you fix this so that the function will work with `readingList` or
// `readingList2`? Please don't change the names of any current identifiers—that is, `readingList`
// and `readingList2` should stay named that.

// A hint: the function calls to get nextBooInfo1 and
// nextBookInfo2 are passing in the values for the reading lists they want to get the next book
// from.

function getNextBookToRead(books) {
  let nextBook = books[0];

  return (
    "You should read " +
    nextBook +
    " next. You have " +
    readingList.length +
    " books left on your list!"
  );
}




/********************* Exercise 5  **********************/
// Declare a function named calculateDogAge that:
// Takes 1 argument: your dog's age.
// Calculates your dog's age in humany years by multiplying the puppy’s age by 7.
// Returns the result of a string like so: "Your doggie is NN years old in dog years!"
function calculateDogAge(age){
  let dogAge = prompt('How Many Human Years Has Your Dog Lived ?')
  dogAge = dogAge*7
  return `your dog is ${dogAge} years old in dog years!! `
}

// Call the function three times with different sets of values.

console.log(calculateDogAge()) 





// What type of scope are you using to declare the variables? 


// local scope 


/********************* Exercise 6  **********************/
let username = "Katherine";

function showMessage(username) {
  let message = "Hello, " + username;
  alert(message);
}

showMessage("Dominique");

// What would print in the alert message when the following code is executed? Think about it, then run the code to see.

// Hello, dominique

// How could we change the code so that we are alerting a message for Katherine? Don't write the string literal "Katherine" a second time (that value already exists if you want to use it again), and don't change the names of any current identifiers (i.e., variables and parameters)—username is a great name for the value globally and in the function!
showMessage(username)