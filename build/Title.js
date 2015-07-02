var Title = React.createClass({displayName: "Title",
  render : function() {
    return (
      React.createElement("div", {id: "title-section", className: "col-md-7 col-md-offset-1"}, 
        React.createElement("h1", {className: "page-title is-editable"}, 
          React.createElement("i", {className: "fa fa-globe"}), React.createElement("span", null, " ",  this.props.title), 
          React.createElement("span", {className: "btn-edit glyphicon glyphicon-pencil small"})
        ), 
        React.createElement("p", {className: "lead"},  this.props.desc), 
        React.createElement(Modalembed, {embedLink:  this.props.embedLink}), 
        React.createElement(Modalsubscribe, {title:  this.props.title, 
                        subsKey:  this.props.subsKey}), 
        React.createElement("button", {type: "button", className: "btn btn-link"}, React.createElement("i", {className: "fa fa-twitter"})), 
        React.createElement("button", {type: "button", className: "btn btn-link"}, React.createElement("i", {className: "fa fa-facebook"}))
      )
    )
  }
});