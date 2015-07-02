var Title = React.createClass({displayName: "Title",
  render : function() {
    return (
      React.createElement("div", {id: "title-section", className: "col-md-7 col-md-offset-1"}, 
        React.createElement("h1", {className: "page-title is-editable"}, 
          React.createElement("i", {className: "fa fa-globe"}), React.createElement("span", null, " ",  this.props.data.title), 
          React.createElement("span", {className: "btn-edit glyphicon glyphicon-pencil small"})
        ), 
        React.createElement("p", {className: "lead"},  this.props.data.description), 
        React.createElement("button", {type: "button", className: "btn btn-default", "data-toggle": "modal", "data-target": "#modalEmbed"}, "EMBED"), 
        React.createElement("button", {type: "button", className: "btn btn-warning", "data-toggle": "modal", "data-target": "#modalSubsribe"}, "SUBSCRIBE"), 
        React.createElement("button", {type: "button", className: "btn btn-link"}, React.createElement("i", {className: "fa fa-twitter"})), 
        React.createElement("button", {type: "button", className: "btn btn-link"}, React.createElement("i", {className: "fa fa-facebook"}))
      )
    )
  }
});