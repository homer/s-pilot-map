var Detailstats = React.createClass({displayName: "Detailstats",
  render : function() {
    return (
      React.createElement("div", null, 
        React.createElement("table", {className: "table"}, 
          React.createElement("tbody", null, 
            React.createElement("tr", null, 
              React.createElement("td", null, "UPDATED"), 
              React.createElement("td", null, "8:34 am")
            ), 
            React.createElement("tr", null, 
              React.createElement("td", null, "VISITS"), 
              React.createElement("td", null, "83,874")
            ), 
            React.createElement("tr", null, 
              React.createElement("td", null, "PERMISSION"), 
              React.createElement("td", null, "Public")
            ), 
            React.createElement("tr", null, 
              React.createElement("td", null, "PUBLISHER"), 
              React.createElement("td", null, React.createElement("a", {href: "#"}, "City of Seattle"))
            ), 
            React.createElement("tr", null, 
              React.createElement("td", null, "SOURCE DATASET"), 
              React.createElement("td", null, React.createElement("a", {href: "#"}, "Seattle Streetsweepers"))
            ), 
            React.createElement("tr", null, 
              React.createElement("td", null, "RELATED"), 
              React.createElement("td", null, React.createElement("a", {href: "", "data-toggle": "modal", "data-target": "#modalPulse"}, "4 Pulses"))
            )
          )
        )
      )
    )
  }
});