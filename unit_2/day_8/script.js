/* 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe" 👌 */
const x = 'John';
const y = 'Doe';

console.log(x + ' <> ' + y);

/* 22) Create an object with properties such name, surname, email 👌 */
const person = {
    name: x,
    surname: y,
    email: 'johndoe@something.com'
};

/* 23) Delete the email property from the previously created object 👌 */
delete person.email;
console.log(person);

/* 24) Create an array with 10 strings in it 👌 */
/* 25) Print in the console every string from the previous array 👌 */
const array = [];
for (let i = 0; i < 10; i++) {
    let letters = 'abcdefghijklmnopqrstuvwxz';
    let random = Math.floor(Math.random() * letters.length);
    array.push(letters[random]);
    console.log(array[i]);
}

/* 26) Create an array with 100 random numbers in it 👌 */
const ranNumbers = [];
for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 1001);
    ranNumbers.push(random);  
}
console.log(ranNumbers);

/* 27) Write a function to get the maximum and minimum values from the previously created array 👌 */
const minMax = (arr) => {
    console.log('Max number in array is: ' + Math.max(...arr) + '\n Min number in array is: ' + Math.min(...arr));
}
console.log(minMax(ranNumbers));

/* 28) Create an array of arrays, in which every array has 10 random numbers 👌 */
const arr = [];
for(let i = 0; i < 10; i++) {
    const arr2 = [];
    for (let i = 0; i < 10; i++) {
        let ranNum = Math.floor(Math.random() * 101);
        arr2.push(ranNum);
    } 
    arr.push(arr2);
}
console.log(arr);

/* 29) Create a function that gets 2 arrays as parameters and returns the longest one 👌 */
const switchArr = [1, 'Erin', 8, 'ES']; //longest array
const switchArr2 = [3, 'Maria'];
const longestArray = (arr1, arr2) => {
    const condition = arr1.length < arr2.length ? console.log('switchArr2 is longer than: switchArr') : console.log('switchArr is longer than: switchArr2');
    return condition
}
longestArray(switchArr, switchArr2);

/* 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values 👌 */
const greaterSum = (arr1, arr2) => {
    let sum = 0;
    let sum1 = 0;
    for (let i= 0; i < arr1.length && arr2.length; i++) {
        let array1Numbers = arr1[i];
        let array1Numbers2 = arr2[i];

        sum += array1Numbers;
        sum1 += array1Numbers2;
    }
    if (sum < sum1) {
        console.log(`Biggest sum of arrays is from array 2. The total is: ${sum1}`);
    } else {
        console.log(`Biggest sum of arrays is from array 1. The total is: ${sum}`);
    } 
}
greaterSum(ranNumbers, array);

/* 31) Get the element with an id of "container" from the page 👌 */
const container = document.getElementById('container');

/* 32) Get every <td> element from the page 👌 */
let td = document.getElementsByTagName('td');

const hiddenTd = document.getElementById('hidden');

/* 33) Use a loop for printing the text inside of every <td> element in the page 👌 */
for(td of td) {
    console.log(td);
}

/* 34) Write a function to change the heading of the page 👌 */
const h1 = document.getElementsByTagName('h1')[0];
const changeH1 = () => {
    h1.innerText = 'New heading using JavaScript';
}
changeH1()

/* 35) Write a function to add an extra row to the table 👌 */
const tableBody = document.querySelector('table tbody');
const newRow = document.createElement('tr');
const newTd = document.createElement('td');
newTd.innerText = 'New cell using JS';
const addTableRow = () => {
    tableBody.appendChild(newRow);
    newRow.appendChild(newTd);
    newTd.setAttribute('colspan', '5');
    newTd.style.textAlign = 'center';
    newTd.style.backgroundColor = 'lightblue';
    newTd.style.color = 'brown';
}
addTableRow();

/* 36) Write a function to add a class of "test" to each row in the table 👌 */
let tr = document.getElementsByTagName('tr');
for (tr of tr) {
    tr.classList.add('new-class');
}

/* 37) Write a function to add a red background to every link in the page 👌 */
let anchor = document.getElementsByTagName('a');
for (let i = 0; i < anchor.length; i++) {
    anchor[i].style.backgroundColor = 'red'
}

/* 38) Console log "Page loaded" when the page is correctly loaded 👌 */
window.addEventListener('load', () => {
    console.log('Page loaded correctly');
})

const ol = document.getElementsByTagName('ol')[0];
const newLi = document.createElement('li');

newLi.innerText = 'List item added via JS';

/* 40) Write a function to empty a list 👌 */
ol.appendChild(newLi);
const emptyList = (li) => {
    while (li.firstChild) {
        li.removeChild(li.firstChild)
    }
}
emptyList(ol)

/* 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property */
const alertOnLinkHover = () => {
    for (let i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener('mouseover', () => {
            alert(anchor[i].getAttribute('href'))
        });
    };
}
alertOnLinkHover()

/* 42) Create a button that will hide every image on the page when clicked 👌*/
const button = document.getElementById('display-button');
button.addEventListener('click', () => {
    if(hiddenTd.style.visibility === 'visible') {
        hiddenTd.style.visibility = 'hidden';
        button.innerText = 'Click to reveal image';
    } else {
        hiddenTd.style.visibility = 'visible';
        button.innerText = 'Click to hide image';
    }
})

/* 43) Create a button that will hide or show the table on the page when clicked 👌 */
const table = document.getElementsByTagName('table');
const tableButton = document.getElementById('hide-table')

tableButton.addEventListener('click', () => {
    if (table[0].style.display === 'none') {
        table[0].style.display = 'inline-block';
        
        tableButton.innerText = 'Click to hide the table';
    } else {
        table[0].style.display = 'none';
        tableButton.innerText = 'Click to show the table'
    }
})

/* 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric) 👌*/
const tableRow = document.querySelectorAll('td')
const tableCol = document.querySelectorAll('th')

const sumNumbersInCells = () => {
    let sum = 0
    for (let i = 0; i < tableRow.length && i < tableCol.length; i++) {
        let extractColNumbers = tableCol[i].innerText.split(' ')
        let extractRowNumbers = tableRow[i].innerText.split(' ')
        let colNumbers = (extractColNumbers[1])
        let rowNumbers = (extractRowNumbers[1])
        if (rowNumbers) {
            let parsedColNumbers = parseInt(colNumbers)
            let parsedRowNumbers = parseInt(rowNumbers)
            sum += parsedColNumbers + parsedRowNumbers
        }
    }
    console.log('The Sum of the numbers in every cell is: ' + sum)
}
sumNumbersInCells()

/* 45) Delete the last letter from the heading each time the user clicks on it 👌*/
const letterRemover = document.getElementById('remove-letter')
const deleteLastHeaderLetter = () => {
    h1.textContent = h1.textContent.slice(0, -1);
    
}
letterRemover.addEventListener('click', deleteLastHeaderLetter)

/* 46) Change the background color of a <td> if the user clicks on it 👌 */
let allTableData = document.getElementsByTagName('td')

const changeAllTdBackgroundColor = () => {
    for (let i = 0; i < allTableData.length; i++) {
        allTableData[i].addEventListener('click', () => {
            if (allTableData[i].style.backgroundColor === 'violet') {
                allTableData[i].style.backgroundColor = 'white'
            } else {
                allTableData[i].style.backgroundColor = 'violet'
            }
            
        }) 
    }
}
changeAllTdBackgroundColor()

/* 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td> 👌*/
const removeRandomCell = document.getElementById('remove-td-random-item')
let tableData = document.getElementsByTagName('td')

const deleteRandomTd = () => {
    let random = Math.floor(Math.random() * allTableData.length)
    for (let i = 0; i < tableData.length; i++) {
        tableData[random].style.display = 'none'
    }
}
removeRandomCell.addEventListener('click', deleteRandomTd)

/* 48) Add automatically a pink border to a cell when the mouse hovers it 👌 */
const addAutomaticBorder = () => {
    for (let i = 0; i < tableData.length; i++) {
        tableData[i].style.border = '3px solid pink'
        tableData[i].addEventListener('mouseover', addAutomaticBorder)
    }
}
for (let i = 0; i < tableData.length; i++) {
    tableData[i].addEventListener('mouseover', addAutomaticBorder)
}

/* 49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page 👌 */
const rows = 4
const columns = 3

const tableElement = document.createElement('table')
const tableheadElement = document.createElement('thead')
const tbodyElement = document.createElement('tbody')

function createTable () {
    let table = container.appendChild(tableElement)
    let thead = table.appendChild(tableheadElement)
    let tbody = table.appendChild(tbodyElement)

    for(let i = 0; i < columns; i++) {
        
        let tableHead = thead.appendChild(document.createElement('th')).innerText = 'Head ' + (i + 1)
    }

    for (let j = 0; j < rows; j++) {
        let tableBody = (tbody.appendChild(document.createElement('tr')))
        tableBody.appendChild(document.createElement('td')).innerHTML = 'Row ' + (j + 1)
    }

    table.classList.add('js-table')
    console.log(table)
    table.style.width = '500px'
    table.style.margin = '6em auto'
}
createTable()

/* 50) Write a function to remove the last table from the page 👌 */
const removeTableBtn = document.getElementsByClassName('remove-table-btn')[0]

removeTableBtn.addEventListener('click', () => {

    tableElement.remove()
    removeTableBtn.remove()

})