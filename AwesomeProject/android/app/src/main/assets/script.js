var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap Contributors. Tiles courtesy of Humanitarian OpenStreetMap Team'
}).addTo(map);

var marker = L.icon({
  iconUrl: 'marker.png',
  shadowUrl: 'shadow.png',

  iconSize:     [36.64, 58.72], // size of the icon
  shadowSize:   [46.08, 34.08], // size of the shadow
  iconAnchor:   [18.28, 56.6], // point of the icon which will correspond to marker's location
  shadowAnchor: [6, 27],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var currentLoc = null;

function onLocationFound(e) {
  currentLoc = e.latlng;
  L.marker(currentLoc, {icon: marker}).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

var randomPoint = null;

function pseudoRandom() {
  if (randomPoint != null) { 
    map.removeLayer(randomPoint);
  }
  var radius = 5000 * Math.random();
  var theta = 2*Math.random() - 1;
  var x = radius * Math.cos(2*Math.PI * theta);
  var y = radius * Math.sin(2*Math.PI * theta);
  var currentLat = currentLoc.lat;
  var currentLng = currentLoc.lng;
  var mInDegreeLat = 111132.954 - 559.822*Math.cos(2*toRadians(currentLat)) - 1.175*Math.cos(4*toRadians(currentLat));
  var a = 6378137; //equator length in meters
  var e = 0.01671022; //eccentricity
  var mInDegreeLng = (Math.PI*a*Math.cos(toRadians(currentLat))) / (180 * Math.sqrt(1 - e**2 * Math.sin(toRadians(currentLat))**2));
  var xShift = x/mInDegreeLng;
  var yShift = y/mInDegreeLat;
  var randomLat = currentLat + yShift;
  var randomLng = currentLng + xShift;
  document.getElementById("textt").textContent=`lat: ${randomLat}, lng: ${randomLng}`;
  randomPoint = new L.marker([randomLat, randomLng]);
  randomPoint.addTo(map);
}

function route() {
  L.Routing.control({
    waypoints: [
      currentLoc,
      randomPoint
    ],
    serviceUrl: "http://127.0.0.1:5000/route/v1"
  }).addTo(map);
}

map.on('locationfound', onLocationFound);
map.locate({setView: true, maxZoom: 16});
