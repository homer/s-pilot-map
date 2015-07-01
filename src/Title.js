var Title = React.createClass({
  render : function() {
    return (
      <div>
        <h1 className="page-title is-editable">
          <i className="fa fa-globe"></i><span> Street Sweepers in Seattle</span>
          <span className="btn-edit glyphicon glyphicon-pencil small"></span>
        </h1>
        <p className="lead">This is a map of showing locations of street sweepers in Seattle. The map is updated every minute to show you the latest location.</p>
        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modalEmbed">EMBED</button>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modalSubsribe">SUBSCRIBE</button>
        <button type="button" className="btn btn-link"><i className="fa fa-twitter"></i></button>
        <button type="button" className="btn btn-link"><i className="fa fa-facebook"></i></button>
      </div>
    )
  }
});