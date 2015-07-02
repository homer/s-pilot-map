var aNeighboorhoods = [
  { name: "North Seattle" },
  { name: "East Seattle" },
  { name: "South Seattle" },
  { name: "West Seattle" }
];

var Filter = React.createClass({
  render : function() {
    return (
      <div id="filter-section" className="row row-filter">
        <div className="dropdown col-md-10 col-md-offset-1">
          Neighborhood
          <button type="button" id="dropdownMenu1" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Filters
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li className="dropdown-header">Dropdown header</li>
            { aNeighboorhoods.map(function(neighborhood){
              return (
                <li><a href="#">{ neighborhood.name }</a></li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
});