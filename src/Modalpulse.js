var Modalpulse = React.createClass({
  render : function() {
    return (
      <div className="modal fade" id="modalPulse" tabindex="-1" role="dialog" aria-labelledby="modalPulseLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="modalPulseLabel">Related Pulses</h4>
            </div>
            <div className="modal-body">
              {this.props.pulses.map(function(pulse){
                var catClass = "";

                switch (pulse.cat) {
                  case 1:
                    catClass = "media-object filter";
                    break;
                  case 4:
                    catClass = "media-object table";
                    break;
                  case 3:
                    catClass = "media-object map";
                    break;
                  default:
                    catClass = "media-object map";
                }

                return (
                  <div className="media">
                    <div className="media-left">
                      <a href="#" className={catClass}></a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading map">{ pulse.name }</h4>
                      <p>{ pulse.desc }</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});