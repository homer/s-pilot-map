var Title = React.createClass({
  render : function() {
    return (
      <div id="title-section" className="col-md-7 col-md-offset-1">
        <h1 className="page-title is-editable">
          <i className="fa fa-globe"></i><span> { this.props.title }</span>
          <span className="btn-edit glyphicon glyphicon-pencil small"></span>
        </h1>
        <p className="lead">{ this.props.desc }</p>
        <Modalembed embedLink={ this.props.embedLink } />
        <Modalsubscribe title={ this.props.title }
                        subsKey={ this.props.subsKey } />
        <button type="button" className="btn btn-link"><i className="fa fa-twitter"></i></button>
        <button type="button" className="btn btn-link"><i className="fa fa-facebook"></i></button>
      </div>
    )
  }
});