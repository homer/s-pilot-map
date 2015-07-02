(function(){
  'use strict';

  var sData = {
    title : 'Street Sweepers in Seattle',
    description : 'This is a map of showing locations of street sweepers in Seattle. The map is updated every minute to show you the latest location.'
  };

  React.render(<div>

    <div className="container-fluid">
      <div className="upper-section row">
        <Title data={sData}/>
        <Detailstats />
      </div>

      <div className="lower-section">
        <Filter />
        <Map />

        <div className="row row-footer">
          <div className="col-md-3 col-md-offset-1">
            <p className="text-muted">&copy; 2015 City of Seattle</p>
          </div>
          <div className="col-md-4 text-center">
            <span className="socrata-footer-logo"></span>
          </div>
        </div>
      </div>
    </div>

    <Modalembed />
    <Modalsubscribe />
    <Modalpulse />

  </div>, document.getElementById('app'));

})();

