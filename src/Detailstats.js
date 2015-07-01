var Detailstats = React.createClass({
  render : function() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <td>UPDATED</td>
              <td>8:34 am</td>
            </tr>
            <tr>
              <td>VISITS</td>
              <td>83,874</td>
            </tr>
            <tr>
              <td>PERMISSION</td>
              <td>Public</td>
            </tr>
            <tr>
              <td>PUBLISHER</td>
              <td><a href="#">City of Seattle</a></td>
            </tr>
            <tr>
              <td>SOURCE DATASET</td>
              <td><a href="#">Seattle Streetsweepers</a></td>
            </tr>
            <tr>
              <td>RELATED</td>
              <td><a href="" data-toggle="modal" data-target="#modalPulse">4 Pulses</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});