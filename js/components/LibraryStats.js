/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var books = require('../data');
var rd3 = require('react-d3');
var BarChart = rd3.BarChart;

var LibraryStats = React.createClass({
    componentWillMount: function () {
        var sortedBooks = books.sort(function (b1, b2) {
            return b2['stars'] - b1['stars'];
        });
        self.starCounts = sortedBooks.map(function (book) {
            return {label: book['title'], value: book['stars']}
        });
    },
    render: function () {
        return (
            <div>
                <h3> You have {books.length} books in your library! </h3>
                <BarChart
                    data={self.starCounts}
                    width={700}
                    height={300}
                    fill={'#3182bd'}
                    title='Top rated books'
                />
            </div>
        );
    }
});

module.exports = LibraryStats;