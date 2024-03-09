// loadMenuItems.js

// Function to load menu items from menuItems.json and create cards for each item
function loadMenuItems() {
    fetch('../data/menuItems.json')
        .then(response => response.json())
        .then(data => {
            // Process the JSON data and create cards
            const parentContainer = document.getElementById('menuGrid');
            data.forEach(item => {
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

                parentContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading menu items:', error));
}

// Call the function to load menu items when the window is loaded
window.onload = function() {
    loadMenuItems();
};
