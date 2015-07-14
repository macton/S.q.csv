var S = require('s');
var Q = require('q');

S.q     = require('s.q');
S.q.csv = require('../s.q.csv');

S.q.csv.load(__dirname+'/test.csv').then( function( data ) {
 console.log( data );
}).done();
