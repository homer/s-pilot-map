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
  }
});