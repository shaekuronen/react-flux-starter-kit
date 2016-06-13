"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')} >
        <DefaultRoute handler={require('./components/homePage')} />
        // by convention, react router assumes the path is the same as the name
        // so for about route, since name="about", the path is about
        // to change the url, can add the path attribute, something like path="about-us"
        // now app.com/about-us points to about
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Route name="authors" handler={require('./components/authors/authorPage')} />
        <Route name="addAuthor" path="author" handler={require('./components/manageAuthorPage')} />
        <NotFoundRoute handler={require('./components/notFoundRoute')} />
        <Redirect from="test" to="app" />
        <Redirect from="about/*" to="about" />
    </Route>
);

module.exports = routes;