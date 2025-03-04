// Initialisation de la carte avec Leaflet.js
var map = L.map('map').setView([5.33, -4.03], 12); // Coordonnées d'Abidjan

// Ajouter une couche de tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Ajouter un marqueur à Abidjan
L.marker([5.33, -4.03]).addTo(map)
    .bindPopup("Voici Abidjan")
    .openPopup();
