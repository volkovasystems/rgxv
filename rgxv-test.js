
const assert = require( "assert" );
const rgxv = require( "./rgxv.js" );

assert.equal( rgxv( "hello", "hello" ), true, "should be true" );

assert.equal( rgxv( /hello/, "hello" ), true, "should be true" );

console.log( "ok" )
