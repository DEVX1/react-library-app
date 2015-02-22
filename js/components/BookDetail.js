/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var Router = require('react-router');
var moment = require('moment');
var books = require('../data');

var BookDetail = React.createClass({
    mixins: [Router.State],

    render: function() {
        var id = this.getParams().id;
        var book = books.filter(function(b) {
            return b.id == id;
        });

        return (
            <div>
                <h4>{book[0].title}</h4>
                <p>by {book[0].author}</p>
                <p>added on: {moment(book[0].added).format("dddd, MMMM Do YYYY")} </p>
                <p>{book[0].stars} stars</p>
            </div>
        );
    }
});

module.exports = BookDetail;