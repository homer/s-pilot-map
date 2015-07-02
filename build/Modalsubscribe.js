var Modalsubscribe = React.createClass({displayName: "Modalsubscribe",
  render : function() {
    return (
      React.createElement("div", {className: "modal fade", id: "modalSubsribe", tabindex: "-1", role: "dialog", "aria-labelledby": "modalSubsribeLabel"}, 
        React.createElement("div", {className: "modal-dialog", role: "document"}, 
          React.createElement("div", {className: "modal-content"}, 
            React.createElement("div", {className: "modal-header"}, 
              React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), 
              React.createElement("h4", {className: "modal-title", id: "modalSubsribeLabel"}, "Subsribe to this Pulse"), 
              React.createElement("p", null, "You can subsribe to this Pulse by using the subsription key below.")
            ), 
            React.createElement("div", {className: "modal-body"}, 
              React.createElement("form", null, 
                React.createElement("div", {className: "form-group"}, 
                  React.createElement("label", {for: "pulseName"}, "Name"), 
                  React.createElement("div", {className: "input-group"}, 
                    React.createElement("input", {type: "text", className: "form-control", id: "pulseName", value: "Street Sweepers in Seattle: West Seattle"}), 
                    React.createElement("span", {className: "input-group-btn"}, 
                      React.createElement("button", {className: "btn btn-default", type: "button"}, 
                        React.createElement("span", {className: "glyphicon glyphicon-copy"}), " Copy"
                      )
                    )
                  )
                ), 
                React.createElement("div", {className: "form-group"}, 
                  React.createElement("label", {for: "pulseSubsKey"}, "Subsription Key"), 
                  React.createElement("div", {className: "input-group"}, 
                    React.createElement("input", {type: "text", className: "form-control", id: "pulseSubsKey", value: "4kdsjnfsaolfrlkbwerli23rg23u0mabflkb239p84"}), 
                    React.createElement("span", {className: "input-group-btn"}, 
                      React.createElement("button", {className: "btn btn-default", type: "button"}, 
                        React.createElement("span", {className: "glyphicon glyphicon-copy"}), " Copy"
                      )
                    )
                  )
                )
              ), 
              React.createElement("p", null, "Anonymous API access to the Pulse is throttled. To activate unlimited access to this Pulse, ", React.createElement("a", {href: "#"}, "request an unlimited Pulse token.")), 
              React.createElement("a", {href: "#"}, React.createElement("span", {className: "glyphicon glyphicon-book"}), " Pulse documentation")
            ), 
            React.createElement("div", {className: "modal-footer"}, 
              React.createElement("button", {type: "button", className: "btn btn-default", "data-dismiss": "modal"}, "Close")
            )
          )
        )
      )
    )
  }
});