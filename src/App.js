var App = React.createClass({
  render : function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="upper-section row">
            <Title title={ this.props.data.title }
                    desc={ this.props.data.description }
                    embedLink={ this.props.data.embedLink }
                    subsKey={ this.props.data.subsKey } />
            <Detailstats updateTime={ this.props.data.updateTime }
                          visits={ this.props.data.visits }
                          permission={ this.props.data.permission }
                          publisher={ this.props.data.publisher }
                          source={ this.props.data.source }
                          rPulses={ this.props.data.rPulses } />
          </div>

          <div className="lower-section">
            <Filter />
            <Map title={ this.props.data.title }
                  desc={ this.props.data.mapDescription } />

            <div className="row row-footer">
              <div className="col-md-3 col-md-offset-1">
                <p className="text-muted">&copy; 2015 { this.props.data.publisher }</p>
              </div>
              <div className="col-md-4 text-center">
                <span className="socrata-footer-logo"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});