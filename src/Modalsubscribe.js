var Modalsubscribe = React.createClass({
  render : function() {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="modalSubsribeLabel">Subsribe to this Pulse</h4>
            <p>You can subsribe to this Pulse by using the subsription key below.</p>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="pulseName">Name</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="pulseName" value="Street Sweepers in Seattle: West Seattle" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-copy"></span> Copy
                    </button>
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label for="pulseSubsKey">Subsription Key</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="pulseSubsKey" value="4kdsjnfsaolfrlkbwerli23rg23u0mabflkb239p84" />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-copy"></span> Copy
                    </button>
                  </span>
                </div>
              </div>
            </form>
            <p>Anonymous API access to the Pulse is throttled. To activate unlimited access to this Pulse, <a href="#">request an unlimited Pulse token.</a></p>
            <a href="#"><span className="glyphicon glyphicon-book"></span> Pulse documentation</a>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    )
  }
});