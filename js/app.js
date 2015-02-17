/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var Router = require('react-router');
var Header = require('./components/Header');
var BookList = require('./components/BookList');
var BookDetail = require('./components/BookDetail');
var LibraryStats = require('./components/LibraryStats');
var Footer = require('./components/Footer');
var moment = require('moment');
var books = require('./data');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var LibraryApp = React.createClass({
    render: function () {
        return (
            <div>
                <Header></Header>
                <div>
                    <BookList books={books}></BookList>
                    <RouteHandler/>
                </div>
                <Footer></Footer>
            </div>
        )
    }
});

var routes = (
    <Route name="app" path="/" handler={LibraryApp}>
        <Route name="book" path="/books/:id" handler={BookDetail}/>
        <DefaultRoute handler={LibraryStats}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});