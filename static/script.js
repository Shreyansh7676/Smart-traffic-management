function submitImages() {
    const imageForm = document.getElementById('imageForm');
    const formData = new FormData(imageForm);
    const resultDiv = document.getElementById('result');

    // Simulate sending images to the server and processing
    resultDiv.textContent = "Processing images...";

    // Simulated delay to mimic server-side processing
    setTimeout(() => {
        // This is where you would handle image analysis and traffic light timing.
        resultDiv.textContent = "Images have been processed. Traffic light durations will be determined by the algorithm.";
    }, 2000);
}


// Initialize the map and set its view to Patiala with a zoom level of 13
var map = L.map('map').setView([30.3398, 76.3869], 13);

// Load and display tile layers on the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Example value to determine circle color
var value = "high"; // Change this to "high", "mid", or "low" to test different scenarios

// Determine circle color based on value
var circleColor;
if (value === "high") {
    circleColor = "red";
} else if (value === "mid") {
    circleColor = "yellow";
} else if (value === "low") {
    circleColor = "green";
}

// Coordinates for a specific location in Patiala
var locationLatLng = [30.3394, 76.3865]; // Example coordinates

// Define the radius of the circle in meters
var circleRadius = 500; // Adjust the radius as needed

// Add a circle to the map with the determined color
var circle = L.circle(locationLatLng, {
    color: circleColor,
    fillColor: circleColor,
    fillOpacity: 0.5,
    radius: circleRadius
}).addTo(map);

// Add a click event to the circle
circle.on('click', function() {
    alert("This is a location with value: " + value + " at Latitude: " + locationLatLng[0] + ", Longitude: " + locationLatLng[1]);
});

// Add a click event listener to the map for any location click
map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    alert("Latitude: " + lat + "\nLongitude: " + lng);
});