/* EXERCISE 1
  Given the object below, write a piece of code for programmatically removing the last skill from the skills array inside the me object.
 */

/* const me = {
  name: "Joh",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

const removeSkill = me.skills.pop()
console.log(removeSkill, me) */

/* EXERCISE 2
Write a piece of code to create an array of only ODD numbers from 1 to 100
 */

const oddNumbers = () => {
  for (let i = 0; i < 101; i++) {
    let oddNumbersList = [];
    if (i % 2 === 1) {
      oddNumbersList.push(i);
      console.log(oddNumbersList);
    }
  }
};

/* EXERCISE 3
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 100 inclusive
 */

function ranNumbers() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 101));
  }
}
/* Or... Using 'Array.from' to iterate on an array-like object, then use an arrow function to create a random number from 0 to 100 (inclusive)*/
const ranNumbersArr = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 101)
);

/* EXERCISE 4
  Write a piece of code for getting only even numerical values from an array . 
 */

function pushEvenNumbers() {
  const ranNumArr = [];
  for (let i = 0; i < 10; i++) {
    let ranNum = Math.floor(Math.random() * 101);
    if (ranNum % 2 === 0) {
      ranNumArr.push(ranNum);
    }
  }
  console.log(ranNumArr);
}

/* EXERCISE 5
Write a piece of code to sum up the numbers in an array
 */

function sumNumbersinArray() {
  let arr = [];
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    let ranNum = Math.floor(Math.random() * 101);
    arr.push(ranNum);
  }

  for (let i = 0; i < arr.length; i++) {
    let arrNumbers = arr[i];
    sum += arrNumbers;
  }
  console.log(arr.join(" + ") + " = " + sum);
}

/* EXERCISE 6
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

function incrementArrNumbers(n) {
  const arr = [];
  let sum = 0;
  let increment = 0;
  let newArr = [];

  for (let i = 0; i < 10; i++) {
    let ranNumber = Math.floor(Math.random() * 101);
    arr.push(ranNumber);
  }

  console.log(arr);
  console.log("-----------------------------------------");

  for (let i = 0; i < arr.length; i++) {
    let arrNumbers = arr[i];
    increment = arrNumbers += n;
    newArr.push(increment);
    sum += increment;
    console.log(
      "New number in array at index: " + "[" + i + "]" + " is: " + increment
    );
  }

  console.log("-----------------------------------------");
  console.log(newArr.join(" + ") + " = " + sum);
}

/* EXERCISE 7 (EXTRA)
 Write a piece of code for deleting only even entries from an array.
*/

function deleteEvenEntries() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    let ranNum = Math.floor(Math.random() * 101);
    arr.push(ranNum);
  }

  const newArr = arr.filter(function removeEven(n) {
    return n % 2 !== 0;
  });

  console.log(newArr);
}

/* EXERCISE 8
Write a piece of code to create an array of 10 elements of random numbers in the range from 0 to 10 inclusive WITHOUT duplicates
 */

function showUniqueItems() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    let ranNum = Math.floor(Math.random() * 11);
    console.log(ranNum);
    arr.push(ranNum);
  }

  const newArr = arr.filter(function removeSameNumber(n, index) {
    return arr.indexOf(n) === index;
  });
  console.log(arr);
  console.log(newArr);
}

function showUniqueItems2() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    let ranNum = Math.floor(Math.random() * 11);
    console.log(ranNum);
    arr.push(ranNum);
  }

  /* Not mutable method */
  const newArr = [...new Set(arr)];
  console.log(newArr);
}

/* EXERCISE 9
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

function countLetterInArr() {
  const arr = ["strive", "is", "great"];

  for (let i = 0; i < arr.length; i++) {
    let indexLenght = arr[i].length;
    console.log(
      "Word: " + "'" + arr[i] + "'" + " has: " + indexLenght + " letters"
    );
  }
}

/* EXERCISE 10
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

function reverseArr() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    let ranNum = Math.floor(Math.random() * 11);
    arr.push(ranNum);
  }

  console.log(arr);
  console.log(arr.reverse());
}

/* EXERCISE 11
 Write a piece of code for getting the maximum numerical value from an array.
*/

function findMaxValue() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    let ranNum = Math.floor(Math.random() * 11);
    arr.push(ranNum);
  }
  console.log(arr);
  console.log(Math.max(...arr));
}

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12
    Write a piece of code to find the oldest movie in the provided movies array.
*/

function getOldesMovie () {
  const movieYear = [];
  for (let i = 0; i < movies.length; i++) {
    movieYear.push(movies[i].Year)
  }
  
  console.log('The oldest movie was filmed in: ' + Math.min(...movieYear))
}


/* EXERCISE 13
    Write a piece of code to get the number of movies contained in the provided movies array.
*/

function getMovies () {
  let movie = []
  for(let i = 0; i < movies.length; i ++) {
    if (movies[i].Type === "movie") {
      movie.push(movies[i].Type)
    }
  }
  console.log("There are: " + movie.length + " occurencies with the type: 'movie' ")
}


/* EXERCISE 14
    Write a piece of code to create an array with just the titles of the movies contained in the provided movies array.
*/

function getMovies () {
  let moviesTitle = []
  for(let i = 0; i < movies.length; i ++) {
    moviesTitle.push(movies[i].Title)
    console.log("Movie: " + "[" + i + "]"  + " is called: " + "''" + movies[i].Title + "''")
  }
}

/* EXERCISE 15
   Write a piece of code to get only the movies produced in this millennium from the provided movies array.
*/

function getMoviesOfMillenium () {
  let moviesFromMilenium = []

  console.log(movies.Year)

  for (let i = 0; i < movies.length; i++) {
    let parseYear = parseInt(movies[i].Year)
    console.log(parseYear)
    if(parseYear >= 2001) {
      moviesFromMilenium.push(parseYear)
    }
  }

  console.log(moviesFromMilenium)
}

/* EXERCISE 16
   Write a piece of code to get the movie with the id given below from the provided movies array.
*/

function getMovieId () {
  const id = "tt0355702";
  const arr = []
  
  for (let i = 0; i < movies.length; i++) {
    let moviesIds = movies[i].imdbID
  
    if(moviesIds === id) {
      arr.push(moviesIds)
    }
  }
  
  console.log(arr)
  
}

/* EXERCISE 17
     Write a piece of code to get  the  the sum of all the years in which the movies in the provided movies array have been produced.
*/

function sumAllYears () {
  let moviesYear = []
  let sum = 0

  for (let i = 0; i < movies.length; i++) {
    let parseYear = parseInt(movies[i].Year)
    moviesYear.push(parseYear)
    sum += parseYear
  }

  console.log(moviesYear.join(" + ") + " = " + sum);
}

/* EXERCISE 18
   Write a piece of code to get  all the movies in the provided movies array which contain the string value (provided below) in the title.
*/

console.log('Failed to provide "String value", hence this excercise can not be completed.')