var aNeighboorhoods = [
  { name: "North Seattle" },
  { name: "East Seattle" },
  { name: "South Seattle" },
  { name: "West Seattle" }
];

var Filter = React.createClass({displayName: "Filter",
  render : function() {
    return (
      React.createElement("div", {id: "filter-section", className: "row row-filter"}, 
        React.createElement("div", {className: "dropdown col-md-10 col-md-offset-1"}, 
          "Neighborhood", 
          React.createElement("button", {type: "button", id: "dropdownMenu1", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "true"}, 
            "Filters", 
            React.createElement("span", {className: "caret"})
          ), 
          React.createElement("ul", {className: "dropdown-menu", "aria-labelledby": "dropdownMenu1"}, 
            React.createElement("li", {className: "dropdown-header"}, "Dropdown header"), 
             aNeighboorhoods.map(function(neighborhood){
              return (
                React.createElement("li", null, React.createElement("a", {href: "#"},  neighborhood.name))
              );
            })
          )
        )
      )
    )
  }
});