var S = require('s');
var Q = require('q');

S.qcsv = require('../s.qcsv');

S.qcsv.load(__dirname+'/test.csv').then( function( data ) {
 console.log( data );
}).done();
