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
              <div className="media">
                <div className="media-left">
                  <a href="#" className="media-object map"></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading map">Street Signs</h4>
                  <p>All street signs including parking, stop and bike route.</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#" className="media-object filter"></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Downtown Streets</h4>
                  <p>Vehicle traffic volumes for arterial streets in Seattle based on spot studies that have been adjusted for seasonal variation. To provide a high level view of traffic volumes on major streets in Seattle...</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#" className="media-object map"></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Street Use Vendor Permits</h4>
                  <p>Currently displays the Street Use Vendor Permits that are required to go through the public notice process.</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <a href="#" className="media-object table"></a>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Seattle Traffic Cameras</h4>
                  <p>Traffic caneras in Seattle owned by SDOT and WSDOT</p>
                </div>
              </div>
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