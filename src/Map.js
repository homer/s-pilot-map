var Map = React.createClass({
  render : function() {
    return (
      <div className="map-container col-md-10 col-md-offset-1">
        <div className="map-header">
          <h3>Street Sweepers in Seattle</h3>
          <p>Streetsweepers by location. You can select a neighboorhood to see only street sweepers there, of select and track a streetsweeper by clickng it.</p>
        </div>
        <div id="map"></div>
      </div>
    )
  }
});