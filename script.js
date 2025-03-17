// ✅ Ensure config.js is loaded before using the token
const loadConfig = () => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "config.js"; // Load config.js file
        script.onload = resolve;
        document.head.appendChild(script);
    });
};

// ✅ Initialize the map AFTER loading the token
loadConfig().then(() => {
    // ✅ Use the token from config.js
    var mapboxAccessToken = MAPBOX_ACCESS_TOKEN;

// ✅My custom Mapbox Style URL from Mapbox Studio
//var customStyleURL = 'mapbox://styles/sherrychalotra/cm8b4dwzr00ia01sqb9y9btek';

var customStyleURL = 'mapbox://styles/sherrychalotra/cm8digld400u701ss0nzzhg80';

// ✅ Initialize the Leaflet Map centered on Calgary (Default: OSM Map)
var map = L.map('map').setView([51.0447, -114.0719], 10);

// ✅ Add the default OpenStreetMap layer (Always starts as the base layer)
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// ✅ Create the styled Mapbox layer (But don't add it initially)
var styledMapLayer = L.mapboxGL({
    accessToken: mapboxAccessToken,
    style: customStyleURL
});

// ✅ Track which layer is currently active
var isStyledMapActive = false;

// ✅ Toggle the Styled Mapbox Layer On/Off
document.getElementById('toggleLayer').addEventListener('click', function () {
    if (isStyledMapActive) {
        // ✅ Remove the Styled Mapbox Layer and Show OpenStreetMap
        map.removeLayer(styledMapLayer);
        osmLayer.addTo(map);
        this.textContent = "Show Styled Map";
    } else {
        // ✅ Remove OpenStreetMap and Show Styled Mapbox Layer
        map.removeLayer(osmLayer);
        styledMapLayer.addTo(map);
        this.textContent = "Show Basic Map";
    }
    isStyledMapActive = !isStyledMapActive; // ✅ Toggle the flag
});

// ✅ Add Scale Bar
L.control.scale({ position: 'bottomleft' }).addTo(map);
});

