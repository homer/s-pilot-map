var Detailstats = React.createClass({displayName: "Detailstats",
  render : function() {
    return (
      React.createElement("span", null, 
        React.createElement("div", {id: "detailstats-section", className: "col-md-4 detail-stats"}, 
          React.createElement("table", {className: "table"}, 
            React.createElement("tbody", null, 
              React.createElement("tr", null, 
                React.createElement("td", null, "UPDATED"), 
                React.createElement("td", null,  this.props.updateTime)
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "VISITS"), 
                React.createElement("td", null,  this.props.visits)
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "PERMISSION"), 
                React.createElement("td", null,  this.props.permission)
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "PUBLISHER"), 
                React.createElement("td", null, React.createElement("a", {href: "#"},  this.props.publisher))
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "SOURCE DATASET"), 
                React.createElement("td", null, React.createElement("a", {href: "#"},  this.props.source))
              ), 
              React.createElement("tr", null, 
                React.createElement("td", null, "RELATED"), 
                React.createElement("td", null, React.createElement("a", {href: "", "data-toggle": "modal", "data-target": "#modalPulse"},  this.props.rPulses.length, " Pulses"))
              )
            )
          )
        ), 
        React.createElement(Modalpulse, {pulses:  this.props.rPulses})
      )
    )
  }
});