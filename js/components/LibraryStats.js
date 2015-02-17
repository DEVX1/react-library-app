/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var books = require('../data');

var LibraryStats = React.createClass({
    render: function () {
        return (
            <div>
                <h3> You have {books.length} books in your library! </h3>
            </div>
        );
    }
});

module.exports = LibraryStats;