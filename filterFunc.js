/*
Write a function, 'filterFunc', that takes a string as its first argument and which also takes an optional secondary argument.  If the secondary argument is 'numbers', the function should return an array containing any characters that are numbers within the string AS NUMBERS, otherwise it should return a string of all the letters with the numbers removed. If any character in the string is a space, ignore that character in what is returned.  If the first argument is NOT a string, the function should return false.

EXAMPLE:

filterFunc('ABC123') = 'ABC'
filterFunc('ABC123', 'numbers') = [1,2,3]

WRITE YOUR FUNCTION BELOW, AND MAKE SURE IT IS CORRECTLY EXPORTED TO TEST.JS
*/



/* 
FILTERFUNC

    Input - One OR two arguments
    Output - Either an array or a string, or false
    Constraints - Should ignore spaces
    Edge Cases - A non string - return false
*/


// FUNCTION with one guaranteed and two possible arguments. Handle default second argument
const filterFunct = function(string, numerical=false){ 
    // define variable to store string return - type of string
    let stringReturn = '';

    // define variable to store number return - type of array
    let numberReturn = [];

    // define a convenient function to iterate through a string and assign variables to the correct returns. Take a string as an argument.
    let analysisFunc = (str) => {
        // Use a for loop, iterate through all the characters of the string.  We don't need to split the string to do this.
        for (let i = 0; i<string.length;i++){
            // define variable to store character
            let thisChar = str[i];
            // if the character IS NOT a space
            if (thisChar!==' '){
                // test for numberness via Number.isNaN(), a useful trick.  If 0 - something is NaN, that something is NOT a number, otherwise, it IS a number.  Note that this does not work for addition.
                if (Number.isNaN(0-thisChar) === false){ 
                    // push to the number array as a number - need to test for number AND coerce pushed result to number type
                    numberReturn.push(parseInt(thisChar));
                } else {
                    // add to the string if not a number
                    stringReturn += thisChar;
                }
            }
                
        }
            
    }
       
    return (typeof(string)!=='string')?false:numerical===true?numberReturn:stringReturn;

    // return the correct variable! Ternaries FTW! Decide if first argument is string, if YES -  use iterative function, if NO - just RETURN FALSE
}

// const filterFunc = (string, optional = false)=>{

// }


module.exports = filterFunc;