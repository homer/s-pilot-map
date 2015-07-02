(function(){
  'use strict';

  var sData = {
    title : 'Street Sweepers in Seattle',
    description : 'This is a map of showing locations of street sweepers in Seattle. The map is updated every minute to show you the latest location.'
  };

  React.render(React.createElement("div", null, 

    React.createElement("div", {className: "container-fluid"}, 
      React.createElement("div", {className: "upper-section row"}, 
        React.createElement(Title, {data: sData}), 
        React.createElement(Detailstats, null)
      ), 

      React.createElement("div", {className: "lower-section"}, 
        React.createElement(Filter, null), 
        React.createElement(Map, null), 

        React.createElement("div", {className: "row row-footer"}, 
          React.createElement("div", {className: "col-md-3 col-md-offset-1"}, 
            React.createElement("p", {className: "text-muted"}, "© 2015 City of Seattle")
          ), 
          React.createElement("div", {className: "col-md-4 text-center"}, 
            React.createElement("span", {className: "socrata-footer-logo"})
          )
        )
      )
    ), 

    React.createElement(Modalembed, null), 
    React.createElement(Modalsubscribe, null), 
    React.createElement(Modalpulse, null)

  ), document.getElementById('app'));

})();

