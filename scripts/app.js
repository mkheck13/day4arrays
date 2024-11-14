


let myString = "Hello, Class";
let myInt = 30;
let myBool = true;

// With arrays we see 3 items but the value will be printed to say 2
// This is to account that arrays are 0 based

// these are basic 1 dimensonal arrays
let myArray = ["apple", "banana", "orange"];
let numArray = [1, 2, 3, 4, 5];

let myMixedArray = ["Pizza", 12, true];

numArray[0] = "Apple";
numArray[3] = 60;

console.log(numArray);

let myTwoDeeArray = 
[ 
    ["Ken", "Martinez", 95212], 
    ["Jacob", "Jacooz", 98021],
    ["Isaiah", "Fergie", 98123] 
];

console.log(myTwoDeeArray);
console.log(myTwoDeeArray[1][0]);
console.log(myTwoDeeArray[2][2]);

let myThreeDee = [ [ [] ] ]

let injectData = document.getElementById("injectData");

let studentBtn = document.getElementById("studentBtn");

studentBtn.addEventListener("click", function() {
    injectData.innerText = myTwoDeeArray[1][1];
});