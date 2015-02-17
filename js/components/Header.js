/**
 * Created by nirum on 2/16/15.
 */

var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <h1><Link to="/">Library</Link></h1>
            </div>
        )
    }
});

module.exports = Header;