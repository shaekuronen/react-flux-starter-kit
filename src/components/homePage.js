"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>React Flux Starter Kit</h1>
                <p>React, React Router, and Flux for fast web apps</p>
            </div>
        );
    }
});

module.exports = Home;