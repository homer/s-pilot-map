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
              React.createElement("div", {className: "media"}, 
                React.createElement("div", {className: "media-left"}, 
                  React.createElement("a", {href: "#", className: "media-object map"})
                ), 
                React.createElement("div", {className: "media-body"}, 
                  React.createElement("h4", {className: "media-heading map"}, "Street Signs"), 
                  React.createElement("p", null, "All street signs including parking, stop and bike route.")
                )
              ), 
              React.createElement("div", {className: "media"}, 
                React.createElement("div", {className: "media-left"}, 
                  React.createElement("a", {href: "#", className: "media-object filter"})
                ), 
                React.createElement("div", {className: "media-body"}, 
                  React.createElement("h4", {className: "media-heading"}, "Downtown Streets"), 
                  React.createElement("p", null, "Vehicle traffic volumes for arterial streets in Seattle based on spot studies that have been adjusted for seasonal variation. To provide a high level view of traffic volumes on major streets in Seattle...")
                )
              ), 
              React.createElement("div", {className: "media"}, 
                React.createElement("div", {className: "media-left"}, 
                  React.createElement("a", {href: "#", className: "media-object map"})
                ), 
                React.createElement("div", {className: "media-body"}, 
                  React.createElement("h4", {className: "media-heading"}, "Street Use Vendor Permits"), 
                  React.createElement("p", null, "Currently displays the Street Use Vendor Permits that are required to go through the public notice process.")
                )
              ), 
              React.createElement("div", {className: "media"}, 
                React.createElement("div", {className: "media-left"}, 
                  React.createElement("a", {href: "#", className: "media-object table"})
                ), 
                React.createElement("div", {className: "media-body"}, 
                  React.createElement("h4", {className: "media-heading"}, "Seattle Traffic Cameras"), 
                  React.createElement("p", null, "Traffic caneras in Seattle owned by SDOT and WSDOT")
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
  }
});