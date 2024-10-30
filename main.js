/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/



/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function user(){
    let age = Number(prompt("Hello there Guy/Gal/Non-binary pal, How old are you?"))
    if (age >=60){
        console.log(`You are ${age} years old, you qualify for a senior discount`)
        return (age)}
    if (age < 16){
        console.log(`You are ${age} years old, you can't drive Bozo`)
        return (age)}
    if (age == 44){
        console.log(`You are ${age} years old, you are the same age as Mister Squirrel `)
        return (age)}
}