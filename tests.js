var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue(value) {
    // var value = 1 + 1 === 2;
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined(value) {
    if (value === undefined) {
        return true;
    } else {
        return false;
    }
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower(iAmWhispering) {
    iAmWhispering = iAmWhispering.toLowerCase();
    return iAmWhispering;
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper(iAmShouting) {
    iAmShouting= iAmShouting.toUpperCase();
    return iAmShouting;
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord(repeatWord, numberOfTimes) {
    repeatWord = repeatWord.repeat(numberOfTimes);
    return repeatWord;
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');


function sliceWord(sliceWord, start, end) {
    sliceWord = sliceWord.slice(start, end);
    return sliceWord;
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

function splitWord(splitWord, seperator) {
    var splits = splitWord.split(seperator);
    return splits;
} 

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen(myString, word) {
    var Carmen = myString.indexOf(word);
    return Carmen;
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain(myString, contains) {
    var museum = myString.includes(contains);
    return museum;
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode(extractZipCode) {
    var zipCode = extractZipCode.match(/\d/g).join('');
    return zipCode;
}


avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber(phoneNumber) {
    var isCorrectPhoneNumber = phoneNumber.match(/\d/g).join('');
    return(isCorrectPhoneNumber);
}


avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber(string) {
    // var string ='1999';
    var n = Number(string);
    return n;
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne(n) {
    // var n = 0;
    n++;
    return n;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree(number) { 
    // isDivisibleByThree = true;
        return (number % 3 === 0);
        // return isDivisibleByThree;  
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber(number) {
    // var makeRandomNumber = 
    return Math.round(Math.random()*number);
    // return makeRandomNumber;
}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber(number) { 
   return Math.round(number); 
    // return roundNumber;
}

avow('roundNumber returns a number rounded up', roundNumber(5.51) === 6);

// Dates
function justAMoment() {
    var day = moment().format('dddd');
    return day;
    // Look at moment.js docs to find how to return the day name, like Wednesday
}

avow('justAMoment returns true if the function returns a day name', justAMoment().includes('day') === true);

// Objects
function myNameIs(anObject) {
    return anObject.name;
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');

// Arrays
function getFirstItem(array) {
    return array[0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog');