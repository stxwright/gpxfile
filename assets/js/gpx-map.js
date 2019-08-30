var gpx = document.currentScript.getAttribute('gpx');

var map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

new L.GPX(gpx, {
    async: true,
    marker_options: {
        startIconUrl: '/assets/images/pin-icon-start.png',
        endIconUrl: '/assets/images/pin-icon-end.png',
        shadowUrl: '/assets/images/pin-shadow.png',
        wptIconUrls: {
            '': '/assets/images/pin-icon-wpt.png'
        },
        shadowAnchor: [14, 44]
      }
}).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
}).addTo(map);