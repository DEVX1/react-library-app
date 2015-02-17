/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');

var BookList = React.createClass({
    render: function() {
        var items = this.props.books.map(function (book) {
            return (
                <li>{book.title} by {book.author}</li>
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