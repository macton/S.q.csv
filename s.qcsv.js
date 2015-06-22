var S   = require('s');
var Q   = require('q');
var fs  = require('fs');
var csv = require('csv');

var qcsv = {
  load  : function( filename ) { return Q.ninvoke( fs, 'readFile', filename, 'utf8' ).then( function( data ) { return Q.ninvoke( csv, 'parse', data ); } ); },
  save  : S.curry( function( filename, rows ) { return Q.ninvoke( csv, 'stringify', rows ) .then( function( text ) { return Q.ninvoke( fs, 'writeFile', filename, text, 'utf8' ); } ) } ),
};

exports = module.exports = qcsv;

