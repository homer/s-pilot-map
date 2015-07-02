var Modalembed = React.createClass({displayName: "Modalembed",
  render : function() {
    return (
      React.createElement("span", null, 
        React.createElement("button", {type: "button", className: "btn btn-default", "data-toggle": "modal", "data-target": "#modalEmbed"}, "EMBED"), 
        React.createElement("div", {className: "modal fade", id: "modalEmbed", tabindex: "-1", role: "dialog", "aria-labelledby": "modalEmbedLabel"}, 
          React.createElement("div", {className: "modal-dialog", role: "document"}, 
            React.createElement("div", {className: "modal-content"}, 
              React.createElement("div", {className: "modal-header"}, 
                React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), 
                React.createElement("h4", {className: "modal-title", id: "modalEmbedLabel"}, "Embed this Pulse"), 
                React.createElement("p", null, "You can embed this Pulse to any page by simply coping the iframe below.")
              ), 
              React.createElement("div", {className: "modal-body"}, 
                React.createElement("form", null, 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("div", {className: "input-group"}, 
                      React.createElement("input", {type: "text", className: "form-control", id: "pulseName", value:  this.props.embedLink}), 
                      React.createElement("span", {className: "input-group-btn"}, 
                        React.createElement("button", {className: "btn btn-default", type: "button"}, 
                          React.createElement("span", {className: "glyphicon glyphicon-copy"}), " Copy"
                        )
                      )
                    )
                  )
                )
              ), 
              React.createElement("div", {className: "modal-footer"}, 
                React.createElement("button", {type: "button", className: "btn btn-default", "data-dismiss": "modal"}, "Close")
              )
            )
          )
        )
      )
    )
  }
});