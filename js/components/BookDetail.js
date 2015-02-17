/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var moment = require('moment');

var BookDetail = React.createClass({
    render: function() {
        var details = this.props.books.map(function (book) {
            return (
                <div>
                    <h4>{book.title}</h4>
                    <p>by {book.author}</p>
                    <p>added on: {moment(book.added).format("dddd, MMMM Do YYYY")} </p>
                </div>
            );
        });
        return (
            <div>
            {details}
            </div>
        );
    }
});

module.exports = BookDetail;