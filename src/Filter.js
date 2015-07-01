var Filter = React.createClass({
  render : function() {
    return (
      <div className="dropdown col-md-10 col-md-offset-1">
        Neighborhood
        <button type="button" id="dropdownMenu1" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Filters
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li className="dropdown-header">Dropdown header</li>
          <li><a href="#">North Seattle</a></li>
          <li><a href="#">East Seattle</a></li>
          <li><a href="#">South Seattle</a></li>
          <li><a href="#">West Seattle</a></li>
        </ul>
      </div>
    )
  }
});