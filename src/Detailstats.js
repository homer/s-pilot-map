var Detailstats = React.createClass({
  render : function() {
    return (
      <span>
        <div id="detailstats-section" className="col-md-4 detail-stats">
          <table className="table">
            <tbody>
              <tr>
                <td>UPDATED</td>
                <td>{ this.props.updateTime }</td>
              </tr>
              <tr>
                <td>VISITS</td>
                <td>{ this.props.visits }</td>
              </tr>
              <tr>
                <td>PERMISSION</td>
                <td>{ this.props.permission }</td>
              </tr>
              <tr>
                <td>PUBLISHER</td>
                <td><a href="#">{ this.props.publisher }</a></td>
              </tr>
              <tr>
                <td>SOURCE DATASET</td>
                <td><a href="#">{ this.props.source }</a></td>
              </tr>
              <tr>
                <td>RELATED</td>
                <td><a href="" data-toggle="modal" data-target="#modalPulse">{ this.props.rPulses.length } Pulses</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modalpulse pulses={ this.props.rPulses } />
      </span>
    )
  }
});