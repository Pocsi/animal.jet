// Card data
const busData = [
    {
        title: "Dog Bus Schematics",
        description: "Detailed schematics of a specialized bus designed for dogs, showing the interior layout and features.",
        imageUrl: "images/Utri_schematics_of_a_bus_for_dogs_1_810f5468-cead-45c9-9033-183c5f142646.png"
    },
    {
        title: "Two-Floor Animal Bus",
        description: "A modern double-decker bus with animals enjoying the roof space.",
        imageUrl: "images/Utri_on_white_background_a_two-floor_bus_with_animals_in_the_ro_f4a76b89-fb68-4822-902f-6a3af54aed37.png"
    },
    {
        title: "Party Bus Design",
        description: "A vibrant party bus design with a festive rooftop setup.",
        imageUrl: "images/Utri_on_white_background_a_two-floor_bus_with_a_party_in_the_ro_44b6d680-f198-4fc8-84ae-2e313791228b (2).png"
    },
    {
        title: "Luxury Party Bus",
        description: "An elegant two-floor bus design with party amenities and modern features.",
        imageUrl: "images/Utri_on_white_background_a_two-floor_bus_with_a_party_in_the_ro_ec24e39f-a025-45e4-bac3-b8311e8c4db6 (3).png"
    }
];

// Function to create card elements
function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${cardData.imageUrl}" alt="${cardData.title}">
        <div class="card-content">
            <h3>${cardData.title}</h3>
            <p>${cardData.description}</p>
        </div>
    `;
    
    return card;
}

// Function to populate the gallery
function populateGallery() {
    const container = document.querySelector('.cards-container');
    busData.forEach(data => {
        const card = createCard(data);
        container.appendChild(card);
    });
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 