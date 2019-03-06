 /*Data types;
 undefined,null, boolean, string, number, and object
 */

 var myName = "Beau" //global variabe
 myName = 8
 let ourName = "freeCodeCamp" //local variable
 const pi = 3.14            //you can  never change a constant

console.log("Hello World")
 var a; //declaring variable
 var b = 2; //assigning variable
 a = 7;
 b=a;
 console.log(a)


 //initialize 3 variables
var a = 5;
var b = 10;
var c = "I am  a string";

//do not change code below line 
a = a + 1;
b = b + 5;
c = c + "String!";

//operators +, - , *, / , ++Incrementing, --decrement
var sum = 10 + 20
console.log(sum)

// decimal numbers or floating point numbers
var ourDecimal = 5.98

//remainder operator ; % often used to check for even and odd numbers
 a += 12;
 b+= 9;
 c +=7;  // same for minus equals and multiplication and division

//escape quotation marks with  backslash; \"i am nt a string\"
//string concatenation of strings
//to find length of a string
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;
console.log(firstNameLength);

var firstLetterOfFirstName = "";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

//strings are immutable; individual characters can't be altered

//arrays allow you to store seversl pieces of data in the same place
var ourArray = ["john" , 23 ];
var myArray = ["Ebun", 1]

//multidimensional arrays
var myArray = [["john" , 23 ],["Ebun", 1]]

var myData = myArray[0]
console.log(myData)

//update arrays
myArray[0] = ["ife", 2]
console.log(myArray);

//multidimensional arrays
var mulArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12], 13,14]];
var myData = mulArray[3][0][2];
console.log (myData)

//append data to end of an array using the PUSH function
mulArray.push(["dog",3]);
console.log(mulArray);

//remove using the pop function
mulArray.pop(["dog",3]);
console.log(mulArray);

//manipulate arrays with shift
var ourArray = ["Stimpson", "J", ["cat"]]; 
var removeFromOurArray = ourArray.shift(); //shifts off the first element
console.log(removeFromOurArray) ;           
console.log(ourArray);

//unshifting an array
var ourArray = ["Stimpson", "J", ["cat"]]; 
ourArray.shift();
console.log(ourArray);
ourArray.unshift("happy");
console.log(ourArray);

//another example
var myList = [["cereal",3 ],["milk", 2],["bananas" , 3],["juice",2],["eggs", 24]]
var data = myList.shift();
console.log(data);
var data = myList.unshift(["howw", 8]);
console.log(myList);


//functions allow us to create reuseable code
function ourReusableFunction(){
    console.log("Hey, World!");
}
ourReusableFunction();

function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
ourFunctionWithArgs(89,34);



//Global and Local Variables
var outterWear = "T-shirt";
function myOutfit() {
    var outterWear = "sweater"
    return outterWear;
}
console.log(myOutfit());


function addThree(){
  var sum = 0;
sum += 3;
// returns nothing 
return sum;
console.log(sum);

}

function nextInLine (arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine (testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function welcomeToBoolean() {

}


//conditional statements
function ourTrueOrFalse (isItTrue){
    if(isItTrue){
        return "Yes, it's True";
    }
    return "No, It's False";
}

function trueOrFalse (wasThatTrue){
    if (wasThatTrue){
        return "Yes, that was true";
    }
    return "No that was false";
}

console.log(trueOrFalse(true));


//comparison operations
function testEquals(val){
    if (val == 12){
        return "True";
    }
    return "false";
}

console.log(testEquals(10));

// use === for comparism with no data type conversion

function testElseIf (val){
    if (val > 10){
        return "Greater than 10"
    }else if (val < 5){
        return "Smaller than 5"
    }else{
        return "Between 5 and 10"
    }

}
console.log(testElseIf());

//order is very important in using else if statements

var name = ["Hole-in-one!","Eagle","Birdie","Par","Bogey","Double Bogey", "Sth i can't see"]
function golfscore (par,strokes){
    if (strokes == 1){
        return names[0]
    }else if (strokes <= par - 2){
        return name[1]
    }else if (strokes == par - 1){
        return name[2]
    }else if (strokes == par){
        return name[3]
    }else if (strokes == par + 1){
        return name[4]
    }else if (strokes == par + 2){
        return name[5]
    }else if (strokes == par + 3){
        return name[6]
    }
return "Change Me";
}

console.log(golfscore(5,4));


//Switch statements
function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }
return answer;
}

console.log(caseInSwitch(1));


//default options in switch statements
function caseInSwitch(val) {
    var answer = "";
    switch(val){
        case "a":
            answer = "alpha"
            break;
        case "b":
            answer = "beta"
            break;
        case "c":
            answer = "gamma"
            break;
        default: 
            answer = "stuff"
            break;
    }
return answer;
}

console.log(caseInSwitch("a"));

//card counting function
var count = 0;
function cc(card){
    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case "j":
        case "q":
        case "k":
        case "a":
            count--;
            break;


    }
        var holdbet = 'Hold';
        if (count > 0){
            holdbet = 'Bet'
        }
        return count + " " + holdbet;
}
cc(2); cc('k'); cc(10); cc('K'); cc('A');
console.log(cc(10));


//creating javascript objects
var  ourDog = {
    "name":" camper",
    "legs":4 ,
    "tails":1,
    "friends":["everything!"]
};
var myDog = {
"name":"quincy",
    "legs":3 ,
    "tails":2,
    "friends":[]
}

//Accessing objet properties with dot notation
var testObj = {
    "hat":"ballcap",
    "shirt":"jersey",
    "shoes":"cleats"
    
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//Accessing objects properties with bracket notation
var testObj = {
    "hat blue":"ballcap",
    "shirt red":"jersey",
    "shoes black":"cleats"
    
};
var shoeValue = testObj["shoes black"];
var shirtValue = testObj["shirt red"];

//Add new properties to an object

var articleType = "shoes black";
var article = testObj;
    testObj.trouser = "track suit";

//delete property from object
delete testObj.trouser


//using objects for lookups
function phoneticLookup (val){
    var result = "" ;

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "Echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));


//testing objects for properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj (checkProp){
if (myObj.hasOwnProperty (checkProp)){
    return myObj[checkProp];
} else {
    return "Not Found"
}
}

console.log(checkObj("kitten"));


// a JS object is a way to store flexible data
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,

        "formats":[
                        "CD",
                        "8T",
                        "LP"
                    ],
        "gold":true
    },

{
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,

        "formats":[
                        "Youtube Video",
                        "8T",
                        "LP"
                    ],
        "gold":true
}



];

//Accessing nested objects
var myStorage = {
    "car": {
       "inside": {
           "glove box": "maps",
           "passenger seat": "crumbs"
       } ,
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; //use square brackets because theres a space in glove-box
console.log(gloveBoxContents);


//accessing  nested arrays
var myPlants = [
    {
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion"
    ]
    },
    {
        type: "trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }

];
var secondTree = myPlants[1].list[1];


//Record collection
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
//Keep a record of the original collection
var collectCopy = JSON.parse(JSON.stringify(collection));

function updateRecords (id, prop, value){
    //if string is empty delete property
    if (value==="")
        {
            delete collection[id][prop];
            //add track to end of array using push if prop is tracks
        }else if (prop === "tracks"){
            //if tracks does not exist we have to create it
            collection[id][prop] = collection[id][prop] || [];
            collection[id][prop].push(value);
            //default condition
        }else{
            collection[id][prop] = value;
        }


    return collection;
 }
console.log (updateRecords(5439, "artist", "ABBA"));
console.log (updateRecords(2468, "tracks", "test"));

//Iterating with while loops
var myArray = [];
var i = 0;
while (i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

//iterate with for loops
var ourArray = [];
for (var i = 1; i < 6; i++){
    ourArray.push(i);
}
console.log(ourArray);

//iterate for loops with even numbers
var ourArray = [];
for (var i = 0; i < 10; i+=2){
    ourArray.push(i);
}
console.log(ourArray);

//iterate for loops with odd numbers
var ourArray = [];
for (var i = 1; i < 10; i+=2){
    ourArray.push(i);
}
console.log(ourArray);

//count backwards with a for loop
var ourArray = [];
for (var i = 10; i > 0; i-=2){
    ourArray.push(i);
}
console.log(ourArray);
//for odd count down
var ourArray = [];
for (var i = 9; i > 0; i-=2){
    ourArray.push(i);
}
console.log(ourArray);

//iterating through an array
var ourArr = [9,10,11,12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++){
    ourTotal += ourArr[i];
}
console.log(ourTotal);

//for multidimensional or nested array, you can use nested for loops
function multiplyAll(arr){
    var product = 1;
    //recognizes length of the first or parent array
    for (var i = 0; i < arr.length; i++){
        //looking at each array inside the parent
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }

    }
    return product;
}
var product = multiplyAll ([[1,2],[3,4],[5,6,7]]);

console.log(product);


//iterate with Do...While loop
var myArray =[];
var i = 10;
do {
    myArray.push(i);
    i++;
}while(i < 5);
console.log(i, myArray);

//Profile LookUp
var contacts = [
    //array of objects
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile (name, prop){
    for (var i = 0; i< contacts.length; i++ ){
        if (contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contacts";
};
var data = lookUpProfile("Akira", "likes");
console.log(data);


//Generate random fractions
function randomFraction(){


    return Math.random();
}

console.log (randomFraction());

//Generate whole numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum(){


    return Math.floor(Math.random() * 10);
};

console.log (randomWholeNum());


//generate random whole numbers wihin a range
function ourRandomRange (ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;

}
var ourRandomRangeAns =  ourRandomRange (1,9);

console.log(ourRandomRangeAns);


//Use the parseInt Function
function convertToInteger(str){
    return parseInt(str);
}
var ans = convertToInteger("56");
console.log(ans)


//Use the parseInt with a radix
function convertToInteger(str){
    return parseInt(str, 2);
}
var ans = convertToInteger("10011");
console.log(ans)

//use the conditional (ternary) opertator
function checkEquals (a,b){
    return a == b ? true : false;
}
var ans = checkEquals(1,2);
console.log(ans)


//use multiple ternary conditionals
function checkSign (num){
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero"

};

console.log(checkSign(-10));

//Differences between the var and let keywords
//Let --> doesnt allow you declare a variable name twice
let catName = "Quincy";
var quote;
catName   = "Beau";

function catTalk(){
"use strict";
catName = "Oliver";
quote = catName + " say Meow!";

return quote;
}
console.log(catTalk());

//compare scopes of the var and let keywords
//var is usually globlly accessible if declared in a fuction
//however let is not 
function checkScope() {
    "use strict";
    let i = "funtion scope";
    if (true){
        let i= "block scope";
        console.log ("Block Scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i;
}
 
console.log (checkScope());


//declare a read only variable with const
//object.freeze prevents ata mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
//object.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99
    }catch( ex ){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//use arrow functiona to write concise anonymous functions
const magic = () => new Date();

//write arrow functions with parameters

//destructuring
var voxel = {x: 3.6, y: 7.4, z: 6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

//new way which is the destructuring syntax
const {x:a, y:b, z:c}= voxel; // a =3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES ={
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures){
"use strict"
const { tomorrow : tempOfTommorrow } = avgTemperatures;
return tempOfTommorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));


//Destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};
function getMaxOfTmrw (forecast){
    "use strict";
    const{tomorrow: {max: maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));


//use destructuring assignment to assign variables from arrays
const [z,x, ,y]  =  [1,2,3,4,5,6]; //space to skip an element
console.log(z,x,y);
let a = 8, b = 6;
(() => {
    "use strict";
[a,b] = [b,a];


})();

console.log(a);
console.log(b);

//use destructuring assignment with rest operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo (list){
    const [ , , ... arr]= list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//use destructuring assignment to pass an object as a functions parameter
const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.87,
min: -0.75,
average: 35.85
};
const half = (function () {
    return function half({max, min}){
        return (max + min)/2.0;
    };
})();
console.log(stats);
console.log(half(stats));

//create strings using template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56 
};

const greeting = `Hello, my name is ${person.name}!
 I am ${person.age} years old.`;

 console.log(greeting);

 //coding challenge
 const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "lineBreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
 };
 function makeList (arr){
     const resultDisplayArray = [];
        for (let i = 0; i < arr.length; i++){
          resultDisplayArray.push(`<li class="text-warning"> ${arr[i]}</li>`)  
        }
     return resultDisplayArray;
 }
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


//write concise object literal declarations using simple fields

const createPerson = (name, age, gender) =>
{
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
//same as
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));


//write concise declaration functions
//put a function inside an object
const bicycle = {
    gear: 2,
    setGear (newGear){ //newgear is function name
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function
//








































































