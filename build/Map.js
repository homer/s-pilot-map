var Map = React.createClass({displayName: "Map",
  render : function() {
    return (
      React.createElement("div", {className: "map-container col-md-10 col-md-offset-1"},
        React.createElement("div", {className: "map-header"},
          React.createElement("h3", null, "Street Sweepers in Seattle"),
          React.createElement("p", null, "Streetsweepers by location. You can select a neighboorhood to see only street sweepers there, of select and track a streetsweeper by clickng it.")
        ),
        React.createElement("div", {id: "map"})
      )
    )
  },
  componentDidMount : function() {
    L.mapbox.accessToken = 'pk.eyJ1Ijoib3NlbnNveSIsImEiOiIyNDg2NmI1YTgxYWM0M2UwNTI0NTEyYTdmM2ExNmJjZiJ9.pYrzm0PRW7hj1uDmy9UeKA';
    var mapboxTiles = L.tileLayer(
      'https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });

    var map = L.map('map')
                .addLayer(mapboxTiles)
                .setView([47.558272,-122.371553], 13);

    var marker = L.marker([47.562211,-122.378076]).addTo(map);
    marker.bindPopup("<b>Hello Socrata!</b><br>F*ck Google Maps, Leaflet is awesome.");

    var circle = L.circle([47.578309,-122.353357], 200, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);
  }
});