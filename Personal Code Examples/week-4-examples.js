/**
 * Author: Jared Brown
 * Created: December 18, 2017
 * Comments: A collection of examples for
 * week 4 of WEB-230.
 */

var userInfo = [
    "JSFan01",
    "programmer@aol.com",
    "sha1$b5cc0714$1$30944cc9fb99b16de0010ca4ef81a47095f21a59",
    "English",
    "United States",
    "2014-3-12T08:05:25.442Z",
    "2017-12-19T02:32:47.258Z",
    "FireFox",
    "02:34:21"
]

var lastSessionDetails = userInfo.slice(-3);
console.log(lastSessionDetails);
//Outputs: [ '2017-12-19T02:32:47.258Z', 'FireFox', '02:34:21' ]

/* OR */

lastSessionDetails = userInfo.slice(6);
console.log(lastSessionDetails);
//Output: (same as above)

detailsForLogin = userInfo.slice(1, 3);
console.log(detailsForLogin);
//Output: [ 'programmer@aol.com','sha1$b5cc071 ... 7095f21a59' ]

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.slice(3, 7);
console.log(numbers);
//Output: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

numbers = numbers.slice(3, 7);
console.log(numbers);
//Output: [ 3, 4, 5, 6 ]

/* --- Array.prototype.splice() --- */

var phrase = ["Back", "to", "the", "drawing", "board."];

phrase.splice(3, 1, "utilities");
console.log(phrase);
//Output: [ 'Back', 'to', 'the', 'utilities', 'board.' ] 

phrase.splice(0, 1, "Say", "hello");
console.log(phrase);
//Output: [ 'Say', 'hello', 'to', 'the', 'utilities', 'board.' ]

var organization = phrase.splice(3);
console.log(organization);
//Output: [ 'the', 'utilities', 'board.' ]
//Note that the phrase is now ['Say', 'hello', 'to']

phrase.splice(3, 0, "my", "little", "friend.");
console.log(phrase);
//Output: [ 'Say', 'hello', 'to', 'my', 'little', 'friend' ]


