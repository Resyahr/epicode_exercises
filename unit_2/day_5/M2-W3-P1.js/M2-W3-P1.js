/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help if you get stuck, reach a Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux
- The solution must be pushed into your repository and be available in eduflow before the next lecture day
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

function area (l1, l2) {
    return ('The area of the retangle is: ' + l1 * l2 + 'cm. sq.')
}

console.log(area(4, 5))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

function crazySum(int1, int2) {
    let sum = int1 + int2
    if(int1 === int2) {
        return sum * 3
    }

    return sum
}

console.log(crazySum(2, 8))

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

let crazyDiff = (num1) => {
    let diff = num1 - 19
    let absoluteDiff = Math.abs(diff)
    if(num1 > 19) {
        absoluteDiff *= 3
    }
    console.log(absoluteDiff)
}

crazyDiff(39)

/* EXERCISE 4
 Write a function called "boundary" which accepts an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

const boundary = (n) => {
    
    if(n >= 20 && n <= 100 || n === 400) {
        return true
    }

    return false
}

console.log(boundary(400))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

const strivify = (string) => {
    const word = "Strive"

    if (string.startsWith(word)) {
        return string
    }
 
    return (word + " " + string)
}

console.log(strivify("Rhayser"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

const check3and7 = (n) => {
    if (n % 3 === 0) {
        return (`${n} is multiple of 3`)
    } else if (n % 5 === 0) {
        return (`${n} is multiple of 5`)
    }

    return (`${n} is not multiple of 3 or 5`)
}

console.log(check3and7(22))

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

const reverseString = (string) => {
    return string.split('').reverse().join("")
}

console.log(reverseString("Hello world"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

const upperFirst = (string) => {
    let word = string.split(' ')
    
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
    }
    return word.join(" ")
}

console.log(upperFirst('hellow world'))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

const cutString = (string) => {
    return string.slice(1, -1)
}

console.log(cutString('hellow world'))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

const giveMeRandom = (n) => {
    const arr = []
    
    for (let i = 0; i < n; i++) {
        let ranNum = Math.floor(Math.random() * 11)
        arr.push(ranNum)
    }
    return arr
}

console.log(giveMeRandom(90))
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
