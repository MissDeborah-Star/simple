
document.addEventListener("DOMContentLoaded", function () {
    const transportSelect = document.getElementById("transport");
    const vtcSubmenu = document.getElementById("vtc-submenu");
    
    
    document.getElementById("transport").addEventListener("change", function() {
        const vtcSubmenu = document.getElementById("vtc-submenu");
        const vtcTable = document.getElementById("vtc-price-table");
        if (this.value === "vtc") {
            vtcSubmenu.classList.remove("hidden");
            vtcTable.classList.remove("hidden");
        } else {
            vtcSubmenu.classList.add("hidden");
            vtcTable.classList.add("hidden");
        }
    });
    
    const vtcClassSelect = document.getElementById("vtc-class");
    const vtcPrices = {
        economy: { Yango: 2000, InDrive: 1800, Uber: 2200, Heetch: 1900 },
        comfort: { Yango: 3500, InDrive: 3200, Uber: 3800, Heetch: 3300 }
    };
    
    const vtcTable = document.getElementById("vtc-price-table");

    function updatePriceTable() {
        const selectedClass = vtcClassSelect.value;
        const rows = vtcTable.querySelectorAll("tbody tr");
        rows.forEach(row => {
            const service = row.querySelector(".service-name").textContent;
            const priceCell = row.querySelector(".service-price");
            if (vtcPrices[selectedClass][service]) {
                priceCell.textContent = `${vtcPrices[selectedClass][service]} FCFA`;
            }
        });
    }

    vtcClassSelect.addEventListener("change", updatePriceTable);
    
    transportSelect.addEventListener("change", function () {
        if (transportSelect.value === "vtc") {
            vtcSubmenu.classList.remove("hidden");
            updatePriceTable();
        } else {
            vtcSubmenu.classList.add("hidden");
            vtcTable.classList.add("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const transportSelect = document.getElementById("transport");
    const taxiSubmenu = document.getElementById("taxi-submenu");
    const gbakaSubmenu = document.getElementById("gbaka-submenu");
    const bateauSubmenu = document.getElementById("bateau-submenu");

    // Fonction pour gérer l'affichage des sous-menus
    function updateSubmenuVisibility() {
        const selectedValue = transportSelect.value;

        // Masquer tous les sous-menus
        taxiSubmenu.style.display = "none";
        gbakaSubmenu.style.display = "none";
        bateauSubmenu.style.display = "none";

        // Afficher le sous-menu en fonction du type de transport choisi
        if (selectedValue === "taxi") {
            taxiSubmenu.style.display = "block";
            taxiSubmenu.innerHTML = `
                <p><strong>Tarif moyen :</strong> 2 500 FCFA</p>
                <p><strong>Remarque :</strong> Les tarifs peuvent varier selon la distance et les conditions de circulation. Il est recommandé de négocier le prix avant de monter.</p>
            `;
        } else if (selectedValue === "gbaka") {
            gbakaSubmenu.style.display = "block";
            gbakaSubmenu.innerHTML = `
                <p><strong>Tarif moyen :</strong> 400 FCFA</p>
                <p><strong>Remarque :</strong> Les tarifs varient selon la distance parcourue. Ayez de la monnaie exacte pour faciliter le paiement.</p>
            `;
        } else if (selectedValue === "bateau_bus") {
            bateauSubmenu.style.display = "block";
            bateauSubmenu.innerHTML = `
                <p><strong>Tarif moyen :</strong> 200 FCFA</p>
                <p><strong>Remarque :</strong> Les bateaux-bus relient divers quartiers en traversant la lagune. Consultez les horaires auprès des gares lagunaires.</p>
            `;
        }
    }

    // Écouteur d'événement pour la sélection du type de transport
    transportSelect.addEventListener("change", updateSubmenuVisibility);

    // Initialiser l'affichage des sous-menus au chargement de la page
    updateSubmenuVisibility();
});


  
  // Initialisation de la carte avec Leaflet.js
  var map = L.map('map').setView([5.33, -4.03], 12);  // Coordonnées d'Abidjan (5.33, -4.03)
        
  // Ajouter une couche de tuiles OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Ajouter un marqueur à Abidjan
  L.marker([5.33, -4.03]).addTo(map)
      .bindPopup("Voici Abidjan")
      .openPopup();


      document.addEventListener("DOMContentLoaded", function() {
        const transportSelect = document.getElementById("transport");
        const taxiSubmenu = document.getElementById("taxi-submenu");
        const vtcSubmenu = document.getElementById("vtc-submenu");
        const gbakaSubmenu = document.getElementById("gbaka-submenu");
        const bateauSubmenu = document.getElementById("bateau-submenu");
    
        // Fonction pour gérer l'affichage des sous-menus
        function updateSubmenuVisibility() {
            const selectedValue = transportSelect.value;
    
            // Masquer tous les sous-menus
            taxiSubmenu.style.display = "none";
            vtcSubmenu.style.display = "none";
            gbakaSubmenu.style.display = "none";
            bateauSubmenu.style.display = "none";
    
            // Afficher le sous-menu en fonction du type de transport choisi
            if (selectedValue === "taxi") {
                taxiSubmenu.style.display = "block";
            } else if (selectedValue === "vtc") {
                vtcSubmenu.style.display = "block";
            } else if (selectedValue === "gbaka") {
                gbakaSubmenu.style.display = "block";
            } else if (selectedValue === "bateau_bus") {
                bateauSubmenu.style.display = "block";
            }
        }
    
        // Écouteur d'événement pour la sélection du type de transport
        transportSelect.addEventListener("change", updateSubmenuVisibility);
    
        // Initialiser l'affichage des sous-menus au chargement de la page
        updateSubmenuVisibility();
    });

    // Fonction pour afficher les véhicules filtrés
function afficherVehicules(vehicules) {
    const resultatsDiv = document.getElementById("resultats-vehicules");
    resultatsDiv.innerHTML = ''; // Réinitialiser les résultats
    if (vehicules.length > 0) {
        vehicules.forEach(vehicule => {
            const vehiculeDiv = document.createElement("div");
            vehiculeDiv.classList.add("vehicule-item", "bg-white", "p-6", "rounded-lg", "shadow-lg", "mb-6", "border", "border-gray-200");
            vehiculeDiv.innerHTML = `
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        <span class="font-semibold text-xl">${vehicule.nom.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                        <h3 class="font-medium text-lg text-gray-800">${vehicule.nom}</h3>
                        <p class="text-gray-600">Prix: ${vehicule.prix} XOF</p>
                    </div>
                </div>
            `;
            resultatsDiv.appendChild(vehiculeDiv);
        });
    } else {
        resultatsDiv.innerHTML = '<p class="text-center text-gray-500">Aucun véhicule trouvé pour cet intervalle de prix.</p>';
    }
}

 // Gestion des onglets
 const tabs = {
    init() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });
        
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterContent(e.target.value.toLowerCase());
        });

        this.switchTab('ligne');
    },

    switchTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('bg-blue-500', btn.dataset.tab === tabName);
            btn.classList.toggle('text-white', btn.dataset.tab === tabName);
            btn.classList.toggle('scale-105', btn.dataset.tab === tabName);
        });

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('hidden', content.id !== `${tabName}Content`);
        });
    },

    filterContent(query) {
        const activeTab = document.querySelector('.tab-content:not(.hidden)');
        Array.from(activeTab.children).forEach(item => {
            const text = item.textContent.toLowerCase();
            item.classList.toggle('hidden', !text.includes(query));
        });
    }
};

// Gestion des sélections
document.querySelectorAll('.tab-content').forEach(content => {
    content.addEventListener('click', (e) => {
        const item = e.target.closest('.tab-content > div');
        if(item) {
            content.querySelectorAll('div').forEach(i => {
                i.classList.remove('bg-blue-900', 'text-white');
            });
            item.classList.add('bg-blue-900', 'text-white');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => tabs.init());


document.addEventListener('DOMContentLoaded', () => {
    // Gestion des clics sur les cartes
    document.querySelectorAll('.payment-card').forEach(card => {
        card.addEventListener('click', () => {
            const qrUrl = card.dataset.qr;
            document.getElementById('qrImage').src = qrUrl;
            document.getElementById('qrOverlay').classList.remove('hidden');
            console.log('QR Code affiché :', qrUrl);
        });
    });

    // Fermeture de l'overlay
    document.getElementById('closeQR').addEventListener('click', () => {
        document.getElementById('qrOverlay').classList.add('hidden');
    });

    // Fermeture en cliquant à l'extérieur
    document.getElementById('qrOverlay').addEventListener('click', (e) => {
        if(e.target === e.currentTarget) {
            document.getElementById('qrOverlay').classList.add('hidden');
        }
    });
});