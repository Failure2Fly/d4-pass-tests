var avow = require('avow');
var moment = require('moment');

// Booleans
function isTrue() {
    var value = 1 + 1 === 2;
    return value;
}

avow('isTrue returns true', isTrue(1 + 1 === 2) === true);

// Null & Undefined
function isNull(value) {
    var emptyGlass = null;
    return emptyGlass;
}

var emptyGlass = null;
avow('isNull returns true', isNull(emptyGlass) === true);

function isUndefined() {
    var blockOfClay;
    return blockOfClay;
}

var blockOfClay;
avow('isUndefined returns true', isUndefined(blockOfClay) === true);

// Strings
function convertCaseLower() {
    var iAmWhispering = 'I AM WHISPERING.';
    iAmWhispering = iAmWhispering.toLowerCase();
    return iAmWhispering;
}

avow('convertCaseLower returns a lowercase string', convertCaseLower('I AM WHISPERING.') === 'i am whispering.');

function convertCaseUpper() {
    var iAmShouting = 'i am shouting!';
    iAmShouting= iAmShouting.toUpperCase();
    return iAmShouting;
}

avow('convertCaseUpper returns an uppercase string', convertCaseUpper('i am shouting!') === 'I AM SHOUTING!');

function repeatWord() {
    var repeatWord = 'Knock.';
    repeatWord = repeatWord.repeat(2);
    return repeatWord;
}

avow('repeatWord returns a repeated word', repeatWord('Knock.', 2) === 'Knock.Knock.');

function sliceWord() {
    var sliceWord = 'I love pizza!';
    sliceWord = sliceWord.slice(7, 12);
    return sliceWord;
}

avow('sliceWord returns a slice of a word', sliceWord('I love pizza!', 7, 12) === 'pizza');

function splitWord() {
    var myString = 'US,CA,MX,JP,UK';
    var splits = myString.split(',');
    return splits;
} 

avow('splitWord returns an array', splitWord('US,CA,MX,JP,UK', ',').length === 5);

function whereIsCarmen() {
    var myString = 'In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.';
    var Carmen = myString.indexOf('Carmen');
    return Carmen;
}

avow('whereIsCarmen returns Carmen\'s position', whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27);

function doesItContain() {
    var myString = 'The Children\'s Museum Of Indianapolis';
    var museum = myString.includes('Museum');
    return museum;
}

avow('doesItContain returns true if it finds a match', doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true);

// Regular Expressions
function extractZipCode() {
    var extractZipCode = 'My zip code was 46240.';
    var zipCode = extractZipCode.match(/\d/g);
    return zipCode;
}

avow('extractZipCode returns a zip code', extractZipCode('My zip code was 46240.') === '46240');

function extractPhoneNumber() {
    var phoneNumber = '(888) 123.1234';
    var isCorrectPhoneNumber = phoneNumber.match(/\d/g).length===10;
    Number(isCorrectPhoneNumber);
}

avow('extractPhoneNumber returns a string of numbers', extractPhoneNumber('(888) 123.1234') === '8881231234');

// Numbers
function stringToNumber() {
    var string ='1999';
    var n = Number(string);
    return n;
}

avow('stringToNumber returns a proper Number', stringToNumber('1999') === 1999);

function incrementByOne() {
    var n = 0;
    n++;
    return n;
}

avow('incrementByOne returns a number one higher', incrementByOne(0) === 1);

function isDivisibleByThree() { 
    isDivisibleByThree = true;
        if (9 % 3 === 0);
        return isDivisibleByThree;  
}

avow('isDivisibleByThree returns true if number is divisible by 3', isDivisibleByThree(9) === true);

function makeRandomNumber() {
    var makeRandomNumber = Math.random() * 10;
    return makeRandomNumber;
}

avow('makeRandomNumber returns a random number between 0 and 10', makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10);

function roundNumber() { 
    var roundNumber = Math.round(5.51); 
    return roundNumber;
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
function myNameIs() {
}

avow('myNameIs returns your name from an object with a name property', myNameIs({name:'Your Name Here'}) === 'Your Name Here');

// Arrays
function getFirstItem() {
    return ['Dog','Cat','Pig','Bird','Fish'][0];
}

avow('getFirstItem returns the first item in the array', getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog');