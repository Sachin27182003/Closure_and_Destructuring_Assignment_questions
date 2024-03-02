/*
You are building a counter application that tracks the number of times a button is clicked. Implement the 
counter using closure.
*/

function numOfTimesButtonClicked(){
    let count = 0;

    return function (){
        return ++count;
    }
}

let numOfClicks = numOfTimesButtonClicked();

console.log(numOfClicks())
console.log(numOfClicks())
console.log(numOfClicks())
