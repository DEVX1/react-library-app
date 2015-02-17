/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var BookList = React.createClass({
    render: function() {
        var items = this.props.books.map(function (book) {
            return (
                <li><Link to="book" params={book}>{book.title}</Link> by {book.author}</li>
            );
        });
        return (
            <div>
                <p>welcome to your library</p>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
});

module.exports = BookList;