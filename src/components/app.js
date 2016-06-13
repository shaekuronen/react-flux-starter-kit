/* eslint-disable strict */

var React = require('react');
var Header = require('./common/header.js');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;