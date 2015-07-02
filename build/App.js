var App = React.createClass({displayName: "App",
  render : function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "container-fluid"}, 
          React.createElement("div", {className: "upper-section row"}, 
            React.createElement(Title, {title:  this.props.data.title, 
                    desc:  this.props.data.description, 
                    embedLink:  this.props.data.embedLink, 
                    subsKey:  this.props.data.subsKey}), 
            React.createElement(Detailstats, {updateTime:  this.props.data.updateTime, 
                          visits:  this.props.data.visits, 
                          permission:  this.props.data.permission, 
                          publisher:  this.props.data.publisher, 
                          source:  this.props.data.source, 
                          rPulses:  this.props.data.rPulses})
          ), 

          React.createElement("div", {className: "lower-section"}, 
            React.createElement(Filter, null), 
            React.createElement(Map, {title:  this.props.data.title, 
                  desc:  this.props.data.mapDescription}), 

            React.createElement("div", {className: "row row-footer"}, 
              React.createElement("div", {className: "col-md-3 col-md-offset-1"}, 
                React.createElement("p", {className: "text-muted"}, "© 2015 ",  this.props.data.publisher)
              ), 
              React.createElement("div", {className: "col-md-4 text-center"}, 
                React.createElement("span", {className: "socrata-footer-logo"})
              )
            )
          )
        )
      )
    )
  }
});