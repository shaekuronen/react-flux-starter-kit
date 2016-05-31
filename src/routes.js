"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')} />
        <DefaultRoute handler={require('./components/homePage')} />
        // by convention, react router assumes the path is the same as the name
        // so for about route, since name="about", the path is about
        // to change the url, can add the path attribute, something like path="about-us"
        // now app.com/about-us points to about
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
    </Route>
);