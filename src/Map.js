var Map = React.createClass({
  render : function() {
    return (
      <div id="map-section" className="row row-map">
        <div className="map-container col-md-10 col-md-offset-1">
          <div className="map-header">
            <h3>{ this.props.title }</h3>
            <p>{ this.props.desc }</p>
          </div>
          <div id="map"></div>
        </div>
      </div>
    )
  },
  componentDidMount : function() {
    // Called after the component view is mounted. Listen for AJAX and Websocket events
    L.mapbox.accessToken = 'pk.eyJ1Ijoib3NlbnNveSIsImEiOiIyNDg2NmI1YTgxYWM0M2UwNTI0NTEyYTdmM2ExNmJjZiJ9.pYrzm0PRW7hj1uDmy9UeKA';
    var mapboxTiles = L.tileLayer(
      'https://{s}.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });

    var initLat = 47.558272;
    var initLng = -122.371553;
    var map = L.map('map')
                .addLayer(mapboxTiles)
                .setView([initLat,initLng], 13);

    var marker = L.marker([initLat,initLng]).addTo(map);
    marker.bindPopup("<b>Hello Socrata!</b><br>F*ck Google Maps, Leaflet is awesome.");

    var circle = L.circle([47.578309,-122.353357], 200, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);

    circle.on('click',function(){
      setInterval(function(){
        initLat += parseFloat(0.00001);
        marker.setLatLng([initLat,initLng]).update();
      }, 17);
    });
  }
});