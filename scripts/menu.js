// loadMenuItems.js

// Function to load menu items from menuItems.json and create cards for each item
function loadMenuItems() {
    const parentContainer = document.getElementById('menuGrid');
    parentContainer.innerHTML = '';
    fetch('/data/menuItems.json')
        .then(response => response.json())
        .then(data => {      
            data.forEach(item => {
                addFoodItemCard(item,parentContainer);
            });
        })  
        .catch(error => console.error('Error loading menu items:', error));
}

function loadQuery(){
    const parentContainer = document.getElementById('menuGrid');
    parentContainer.innerHTML = '';

    const input = document.getElementById("foodQuery").value.toLowerCase().trim().split(/\s+/);
    console.log(input);
    if(input[0]==''){
        console.log("no input");
        loadMenuItems();
    }
    else{
        console.log("input available");
        fetch('/data/menuItems.json')
        .then(response => response.json())
        .then(data => {            
            data.forEach(item => {
                if(checkquery(input,item.tags)){
                    console.log(item.title);
                    addFoodItemCard(item,parentContainer);
                }
            });
        })  
        .catch(error => console.error('Error loading menu items:', error));
    }
}

function addFoodItemCard(item,parent){
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('food-card');
    card.style.width = '18rem';
    card.style.marginBottom = '4em';
    

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = item.url;
    img.alt = item.title;
    img.height = 182;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = item.title;

    const description = document.createElement('span');
    description.classList.add('card-text');
    description.textContent = item.description;

    cardBody.appendChild(title);
    cardBody.appendChild(description);

    card.appendChild(img);
    card.appendChild(cardBody);                
    card.classList.add('fade-in');
    
    parent.appendChild(card);
}

function checkquery(a, b) {
    for (let i of a) {
        if (!b.includes(i)) {
            return false;
        }
    }
    return true;
}

window.onload = function() {
    loadMenuItems();
};


