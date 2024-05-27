let map = L.map('map').setView([51.27735, 4.63064], 16)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let logoicon = L.icon({
    iconUrl: './assets/icons/fictieflogo.png',

    iconSize:     [40, 40],
    iconAnchor:   [0, 20], 
});

L.marker([51.27735, 4.63064], {icon: logoicon}).addTo(map);

