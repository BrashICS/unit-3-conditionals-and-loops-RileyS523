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

function user_name(){
    let name = prompt("Hello there Guy, gal. or non-binary pal, what is your name?")
    if (name == "Mr.Squirrel"){
        console.log("🐿️")
    }
}


function start_game(){
    let name = prompt("Since you are ready for a scare. Will you tell me your name?")
    alert(`(You hear a ghostly voice in your ear)Welcome ${name}, welcome to your new home, in Haunted St. Matthew HS...`)
    let choice = prompt("You come into the school and see two hallways and a stairwell. One hall leads to the Library(1), the other hall leads to the gymnasium(2), the stairwell heads to the darkness below")
    if (choice == 1){
        library()
    }
}
function library(){alert("(You feel the ghostly presence near you and it speaks again) Welcome to your personal Library, we have all sorts of books here")
    let choice_lib=prompt("(The ghostly voice continues) Care to stay? ('1' if yes and '2' if no)") 
    if (choice_lib == 1){
        alert("Immediately, you notice a horrid stench, it is clear that the place is a breading ground for bacteria, as you try and escape, the door locks from the outside, and you slowly die of Dysentery")
        return ("game over")
    }
    if (choice_lib == 2){
        alert("As you leave the library, you feel a ghostly hand on your shoulder, you hear the ghostly voice now whispering in your ear")
        alert("Leaving so soon, I was hoping we would have a bit of fun~")
        let action = prompt("Do you run (1 if yes, 2 if no")
    }
}