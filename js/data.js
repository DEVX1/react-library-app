/**
 * Created by nirum on 2/16/15.
 */

var moment = require('moment');

module.exports = [{
    id: 1,
    title: 'Slaughterhouse V',
    author: 'Kurt Vonnegut',
    added: moment("2007-05-20").format(),
    stars: Math.round(Math.random()*100)
}, {
    id: 2,
    title: 'The Giver',
    author: 'Lois Lowery',
    added: moment("2005-01-03").format(),
    stars: Math.round(Math.random()*100)
}, {
    id: 3,
    title: 'Beowulf',
    author: 'Unknown',
    added: moment("2009-03-14").format(),
    stars: Math.round(Math.random()*100)
}, {
    id: 4,
    title: 'The Scarlet Letter',
    author: 'Nathaniel Hawthorne',
    added: moment("2007-08-13").format(),
    stars: Math.round(Math.random()*100)
}, {
    id: 5,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    added: moment("2006-05-05").format(),
    stars: Math.round(Math.random()*100)
}, {
    id: 6,
    title: 'The Trial',
    author: 'Franz Kafka',
    added: moment("2010-07-30").format(),
    stars: Math.round(Math.random()*100)
}];