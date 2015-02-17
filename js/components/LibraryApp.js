/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var Header = require('./Header');
var BookList = require('./BookList');
var BookDetail = require('./BookDetail');
var Footer = require('./Footer');
var moment = require('moment');

var books = [{
    title: 'Slaughterhouse V',
    author: 'Kurt Vonnegut',
    added: moment("2007-05-20").format()
}, {
    title: 'The Giver',
    author: 'Lois Lowery',
    added: moment("2005-01-03").format()
}, {
    title: 'Beowulf',
    author: 'Unknown',
    added: moment("2009-03-14").format()
}, {
    title: 'The Scarlet Letteer',
    author: 'Nathaniel Hawthorne',
    added: moment("2007-08-13").format()
}, {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    added: moment("2006-05-05").format()
}, {
    title: 'The Trial',
    author: 'Franz Kafka',
    added: moment("2010-07-30").format()
}];

var LibraryApp = React.createClass({
    render: function () {
        return (
            <div>
                <Header></Header>
                <div>
                    <BookList books={books}></BookList>
                    <BookDetail books={books}></BookDetail>
                </div>
                <Footer></Footer>
            </div>
        )
    }
});

module.exports = LibraryApp;