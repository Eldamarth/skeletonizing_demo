const testStrings = require('./strings');    // import test strings
const filterFunc = require('./filterFunc');  // import filter function

/* 

WORK IN FILTERFUNC.JS - CREATE A FUNCTION AS DESCRIBED THERE, AND RUN THIS FILE

*/


testStrings.forEach( string => {
    console.log(filterFunc(string));
    console.log(filterFunc(string,'numbers'));
})