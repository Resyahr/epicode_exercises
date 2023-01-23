//GET DOM Elements
const title = document.getElementById('title');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer');
const itemName = document.querySelectorAll('h2');
const links = document.querySelectorAll('a');
const images = document.querySelectorAll('img');
const price = document.querySelectorAll('span')

//Function to change the content of the h1 tag
function changeTitle () {
    title.innerText = 'Warp into the store';
    title.style.color = 'fuchsia';
}

//Function to change web page background color
function changeBgColor () {
    container.style.backgroundColor = '#161616';
}

//function to change footer's address
function changeFooterAddress () {
    let fakeAddress = 'Wankada, Central City, 33224, Thanos'
    footer.innerText = fakeAddress
}

//Function to add classList .link to anchors
function addClassToLinks () {
    links.forEach(function(element) {
        element.classList.add('link')
        element.setAttribute('target', '_blank')
    })
}

//Function to toggle visibility of images
function toggleImagesVisibility() {
    images.forEach(function(element) {
        element.classList.toggle('visible')
    })
}

//Function to change the color of prices for every appereance
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

//Additional Functions
function addClassToH2 () {
    itemName.forEach(function(element) {
        element.classList.add('product-title')
    })
}

//Load functions
changeBgColor()
setTimeout(changeTitle, 5000)
setTimeout(changeFooterAddress, 5000)
addClassToLinks()
toggleImagesVisibility()
price.forEach(price => {
    price.style.color = getRandomColor()
    price.style.backgroundColor = 'white'
})

//Load additional functions
addClassToH2 ()