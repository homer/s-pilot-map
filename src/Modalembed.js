var Modalembed = React.createClass({
  render : function() {
    return (
      <div className="modal fade" id="modalEmbed" tabindex="-1" role="dialog" aria-labelledby="modalEmbedLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="modalEmbedLabel">Embed this Pulse</h4>
              <p>You can embed this Pulse to any page by simply coping the iframe below.</p>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" id="pulseName" value='<iframe width="560" height="315" src="https://www.socrata.com/embed/7rDsRXj9-cU" frameborder="0" allowfullscreen></iframe>' />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-copy"></span> Copy
                      </button>
                    </span>
                  </div>
                </div>
              </form>
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