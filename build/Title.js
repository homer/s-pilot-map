var Title = React.createClass({displayName: "Title",
  render : function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", {className: "page-title is-editable"}, 
          React.createElement("i", {className: "fa fa-globe"}), React.createElement("span", null, " Street Sweepers in Seattle"), 
          React.createElement("span", {className: "btn-edit glyphicon glyphicon-pencil small"})
        ), 
        React.createElement("p", {className: "lead"}, "This is a map of showing locations of street sweepers in Seattle. The map is updated every minute to show you the latest location."), 
        React.createElement("button", {type: "button", className: "btn btn-default", "data-toggle": "modal", "data-target": "#modalEmbed"}, "EMBED"), 
        React.createElement("button", {type: "button", className: "btn btn-warning", "data-toggle": "modal", "data-target": "#modalSubsribe"}, "SUBSCRIBE"), 
        React.createElement("button", {type: "button", className: "btn btn-link"}, React.createElement("i", {className: "fa fa-twitter"})), 
        React.createElement("button", {type: "button", className: "btn btn-link"}, React.createElement("i", {className: "fa fa-facebook"}))
      )
    )
  }
});