/* EXERCISE 1
 Write a piece of code to find the largest of given two integers
*/

/* WRITE YOUR ANSWER HERE */

function largestNumber (n1, n2) {
  if (n1 < n2) {
    console.log(`The largest number is: ${n2}`);
  }
  else {
    console.log(`The largest number is: ${n1}`);
  }
}

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/

/* WRITE YOUR ANSWER HERE */
function equalToFive (number) {
  if (number !== 5) {
    console.log(`${number} is not equal to 5`);
  }
  else {
    console.log(`${number} is equal to 5`);
  }
}


/* EXERCISE 2
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */
function divisibleByFive(n) {
  if (n % 5) {
    console.log(`${n} is not divisible by 5`);
  }
  else {
    console.log(`${n} is divisible by 5`);
  }
}

/* EXERCISE 3
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE */

function checkIfEight (n) {
  if (n === 8 || (n + n) === 8 || (n - n) === 8) {
    console.log(`${n} is equal to 8`);
  }
  else {
    console.log(`${n} is not equal to 8`);
  }
}

/* EXERCISE 4
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */

let promotion = 50;
let shipping = 10;

function eligibleForPromo (totalShoppingCart) {
  let total = totalShoppingCart;
  if (total === promotion || total > promotion) {
    console.log("You are elegible for free shipping");
  }
  else {
    console.log(`You are not elegible for free shipping you have to pay ${shipping} for the shipping`);
  }
}

/* EXERCISE 5
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */
let blackFriday = true;
let blackFridayDiscount = 20;
let shippingCost = 10;
let promo = 50;

function totalPurchaseCost (total) {
  if (total >= promo && blackFriday) {
    console.log("Congrats, you don't pay for the shipment");
    console.log(`Also, is Black Friday and you get a ${blackFridayDiscount}% discount.`);
    console.log(`The total is: ${blackFridayDiscount * total / 100}$`);
  }

  else if (total < promo && blackFriday) {
    console.log(`Your purchase is not more than ${promo}$, you pay ${shippingCost} for the shippment.`);
    console.log(`But, is Black Friday and you get a ${blackFridayDiscount}% discount.`);
    console.log(`The total is: ${(blackFridayDiscount * total) / 100 + shippingCost}$`);
  }

  else if (total > promo || total === promo && !blackFriday) {
    console.log(`The total is: ${total}`);
  }
  else {
    console.log(`You pay ${shippingCost} for the shipment`)
  }
}

/* EXERCISE 6
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE */
let x = 3114;
let y = 3229;
let z = 4222;

function orderNumbers (x, y, z) {
  if (x > y && x > z && y > z) {
    console.log(`Highest value is: ${x}`);
    console.log(`Second highest value is: ${y}`);
    console.log(`Last value is: ${z}`);

  }
  else if (y > x && y > z && x > z) {
    console.log(`Highest value is: ${y}`);
    console.log(`Second highest value is: ${x}`);
    console.log(`Last value is: ${z}`);
  }
  else if (z > x && z > y && x > y) {
    console.log(`Highest value is: ${z}`);
    console.log(`Second highest value is: ${x}`);
    console.log(`Last value is: ${y}`);
  }
  else if (z > x && z > y && y > x) {
    console.log(`Highest value is: ${z}`);
    console.log(`Second highest value is: ${y}`);
    console.log(`Last value is: ${x}`);
  }
}

/* EXERCISE 7
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

/* WRITE YOUR ANSWER HERE */

let integer = typeof 0;
function checkIfInteger(n) {
  if ((typeof n) !== (typeof integer)) {
    console.log(`${n} is an integer`)
  }
  else {
    console.log(`${n} is not an integer`)
  }
}

/* EXERCISE 8
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/

/* WRITE YOUR ANSWER HERE */

function evenOrOdd(n){
  if ((n % 2) === 0) {
    console.log('This number is even');
  }
  else {
    console.log('This number is odd');
  }
}

/* EXERCISE 9
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/

/* WRITE YOUR ANSWER HERE */

/*
EXERCISE 10
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/

/* WRITE YOUR ANSWER HERE */

function checkGreaterThann(num) {
  if(num < 5) {
    console.log('Tiny')
  }
  else if (num < 10) {
    console.log('Small')
  }
  else if (num < 15) {
    console.log('Medium')
  }
  else if (num < 20) {
    console.log('Large')
  }
  else if (num >= 20) {
    console.log('Huge')
  }
}

/*  EXERCISE 11
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = true;
let checkGender = isMale === true ? 'Your gender is male' : 'Your gender is female';

console.log(checkGender);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
Display the numbers 0 through 5 (inclusive) in ascending order using a while loop.
*/

/* WRITE YOUR ANSWER HERE */
let startingPoint = 0;

function countToFive() {
  while (startingPoint < 6) {
    console.log(startingPoint)
    startingPoint++
  }
}

/* EXERCISE 13
Display the numbers 0 through 10 (inclusive) in ascending order using a for loop.
*/

/* WRITE YOUR ANSWER HERE */

function countToTen() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }  
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in ascending order  but skip displaying 3 and 8.
*/

/* WRITE YOUR ANSWER HERE */

function countSkipping() {
  for (let i = 0; i < 11; i++) {
    if (i === 3 ) {
      i = 4
    }
    else if (i === 8 ) {
      i = 9
    }

    console.log(i);
  }  
}

/* EXERCISE 15
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

/* WRITE YOUR ANSWER HERE */

function countToFifteen() {
  for (let i = 0; i < 16 ; i++) {
    if ((i % 2) === 0) {
      console.log(`${i} is an even number`);
    }
    else {
      console.log(i)
    }
  }
}


/* EXERCISE 16
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */

/* WRITE YOUR ANSWER HERE */

function countToHundred() {
  for (let i = 0; i < 101 ; i++) {
    if ((i % 3) === 0) {
      console.log(`${i} --- Fizz`);
    }
    else if ((i % 5) === 0) {
      console.log(`${i} --- Buzz`);
    }
    else {
      console.log(`${i} --- FizzBuzz`);
    }
  }
}

/* EXERCISE 17
  Write a piece of code to check the day of the week .  Use  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */

/* WRITE YOUR ANSWER HERE */

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}