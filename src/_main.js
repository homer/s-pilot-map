(function(){
  'use strict';

  var sData = {
    title : "Street Sweepers in Seattle",
    description : "This is a map of showing locations of street sweepers in Seattle. The map is updated every minute to show you the latest location.",
    mapDescription : "Streetsweepers by location. You can select a neighboorhood to see only street sweepers there, of select and track a streetsweeper by clickng it.",
    updateTime : "8:34 am",
    visits : "83,874",
    permission : "Public",
    publisher : "City of Seattle",
    source : "Seattle Streetsweepers",
    rPulses : [
      {
        name: "Street Signs",
        desc: "All street signs including parking, stop and bike route.",
        cat : 3
      },
      {
        name: "Downtown Streets",
        desc: "Vehicle traffic volumes for arterial streets in Seattle based on spot studies that have been adjusted for seasonal variation. To provide a high level view of traffic volumes on major streets in Seattle...",
        cat : 1
      },
      {
        name: "Street Use Vendor Permits",
        desc: "Currently displays the Street Use Vendor Permits that are required to go through the public notice process.",
        cat : 3
      },
      {
        name: "Seattle Traffic Cameras",
        desc: "Traffic caneras in Seattle owned by SDOT and WSDOT",
        cat : 4
      }
    ],
    embedLink : '<iframe width="560" height="315" src="https://www.socrata.com/embed/7rDsRXj9-cU" frameborder="0" allowfullscreen></iframe>',
    subsKey : '4kdsjnfsaolfrlkbwerli23rg23u0mabflkb239p84'
  };

  React.render(<App data={sData}></App>, document.getElementById('app'));

})();

