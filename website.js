const themeButton = document.querySelector(".theme-toggle");

 function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const themeButton = document.querySelector(".theme-toggle");
  const bodybtn= document.querySelector('.body')
  
  themeButton.textContent = document.body.classList.contains("dark-theme")
    ? "🌙"  
    : "🌞";
}

// bodybtn.addEventListener('click', () => {  
//   bodybtn.style.backgroundColor = '#00000000';
//   bodybtn.style.Color = 'white';
//   toggleTheme();
// });

// scroll left

function myFunction() {
  const element = document.getElementById("myDIV");
  let x = element.scrollLeft;
  let y = element.scrollTop;
  document.getElementById ("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// My list
const myListBtn = document.getElementById('open-mylist');
const listTab = document.getElementById('list-tab');
const closeListBtn = document.getElementById('close-my-list');
const listCart = document.getElementById('listcart');

// My List items storage (using an array for simplicity)
let myListItems = [];

// Function to open My List
myListBtn.addEventListener('click', () => {
    listTab.style.display = 'block';
    displayListItems();
});

// Function to close My List
closeListBtn.addEventListener('click', () => {
    listTab.style.display = 'none';
});

// Function to add items to the list
function addItemToList(imageUrl) {
    // Check  the item is already in the list
    if (!myListItems.includes(imageUrl)) {
        myListItems.push(imageUrl);
    }
    // the item is added 
myListBtn.textContent = 'Added!';
myListBtn.style.backgroundColor = '#28a745';

setTimeout(() => {
  myListBtn.textContent = 'My List';
  myListBtn.style.backgroundColor = 'green'; 
}, 10000); 

    displayListItems();
}

// Function to remove items from the list
function removeItemFromList(imageUrl) {
    myListItems = myListItems.filter(item => item !== imageUrl);

    displayListItems();
}




// Function to display the list items
function displayListItems() {
    listCart.innerHTML = ''; 

    if (myListItems.length === 0) {
        listCart.innerHTML = 'No items in list.';
    } else {
        myListItems.forEach(item => {
            // Create a container for each list item
            const listItem = document.createElement('div');
            listItem.style.display = 'flex';
            listItem.style.alignItems = 'center';
            listItem.style.justifyContent = 'space-between';
            listItem.style.marginBottom = '10px';

            // Create an image element
            const img = document.createElement('img');
            img.src = item;

            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.style.backgroundColor = '#000000a3'; 
            removeBtn.style.color = 'white';
            removeBtn.style.width = '87px';
            removeBtn.style.height = '32px';
            removeBtn.style.borderColor = 'white'; 
            removeBtn.style.borderRadius = '10px'; 
            removeBtn.onclick = () => removeItemFromList(item);

            // Append elements to the list item container
            listItem.appendChild(img);
            listItem.appendChild(removeBtn);

            // Append the list item to the list cart
            listCart.appendChild(listItem);
        });
    }
}





const cardData = [
  {
    title: "Cloud Atlas",
    description: "Everything is connected.",
    image: "./image/img1.jpg"
  },
  {
    title: "Creature",
    description: "Everything is connected.",
    image: "./image/img7.png"
  },
  {
    title: "The conjuring",
    description: "Everything is connected.",
    image: "./image/img8.png"
  },
  {
    title: "A Ghost Ruined My Life",
    description: "Everything is connected.",
    image: "./image/img9.png"
  },
  {
    title: "OUIJA",
    description: "They thought it was just a game",
    image: "./image/img10.png"
  },
  {
    title: "The Appeared",
    description: "How can you save already dead",
    image: "./image/img11.png"
  }
];

// Function to create a card element
function createCard(card) {
  // Create card element
  const cardElement = document.createElement('div');
  cardElement.className = 'card';

  // Create card image element
  const cardImage = document.createElement('img');
  cardImage.src = card.image;
  cardElement.appendChild(cardImage);

  // Create card content container
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  // Create card title element
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.textContent = card.title;
  cardContent.appendChild(cardTitle);

  // Create card description element
  const cardDescription = document.createElement('p');
  cardDescription.className = 'card-description';
  cardDescription.textContent = card.description;
  cardContent.appendChild(cardDescription);

  // Append card content to card
  cardElement.appendChild(cardContent);

  return cardElement;
}

// Function to render cards
function renderCards() {
  const cardContainer = document.getElementById('card-container');

  // Loop through card data and create cards
  cardData.forEach(card => {
    const cardElement = createCard(card);
    cardContainer.appendChild(cardElement);
  });
}

// Render the cards on page load
renderCards();
