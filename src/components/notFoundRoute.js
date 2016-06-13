"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundRoute = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Page not found</h1>
                <p>Nothing to see here</p>
                <Link to="app">Home Page</Link>
            </div>
        );
    }
});

module.exports = NotFoundRoute;