var Modalpulse = React.createClass({displayName: "Modalpulse",
  render : function() {
    return (
      React.createElement("div", {className: "modal fade", id: "modalPulse", tabindex: "-1", role: "dialog", "aria-labelledby": "modalPulseLabel"}, 
        React.createElement("div", {className: "modal-dialog", role: "document"}, 
          React.createElement("div", {className: "modal-content"}, 
            React.createElement("div", {className: "modal-header"}, 
              React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), 
              React.createElement("h4", {className: "modal-title", id: "modalPulseLabel"}, "Related Pulses")
            ), 
            React.createElement("div", {className: "modal-body"}, 
              this.props.pulses.map(function(pulse){
                var catClass = "";

                switch (pulse.cat) {
                  case 1:
                    catClass = "media-object filter";
                    break;
                  case 4:
                    catClass = "media-object table";
                    break;
                  case 3:
                    catClass = "media-object map";
                    break;
                  default:
                    catClass = "media-object map";
                }

                return (
                  React.createElement("div", {className: "media"}, 
                    React.createElement("div", {className: "media-left"}, 
                      React.createElement("a", {href: "#", className: catClass})
                    ), 
                    React.createElement("div", {className: "media-body"}, 
                      React.createElement("h4", {className: "media-heading map"},  pulse.name), 
                      React.createElement("p", null,  pulse.desc)
                    )
                  )
                );
              })
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