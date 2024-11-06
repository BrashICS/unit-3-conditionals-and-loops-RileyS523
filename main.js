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
document.getElementById("halloween_adventure").addEventListener("click", start_game);


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
    let str_length= string.length(name)
    if (str_length <= 7){
        console.log(`${name} is a long name`)}
    if (str_length > 3)
        {console.log(`${name} is a short name`)
    }
}
//else if

function menu(){
    let message = `Hi! Please make a selection:
    1 - Play
    2 - Options
    3 - DLC
    4 - Check for Updates
    5 - Exit
    `
    // Prompt with the menu
    let selection = Number(prompt(message));
    if(selection == 1){
        alert(`Let's Play!`)
        let dif = prompt(`Select a Difficulty
            1 - Easy
            2 - Medium
            3 - Hard`)
        if (dif == 1){
            alert(`You selected the easy route Stardust`)
        }else if (dif == 2){
            alert(`Most people pick this one Stardust, so original`)
        }else if (dif == 3){
            alert(`Hey there Stardust, ready for a challenge?`)
        }else {alert(`Invalid input`)}
    }else if(selection == 2){
        alert(`You selected Options`)
    }else if(selection == 3){
        alert(`No New DLC at this time for In Stars And Time`)
    }else if(selection == 4){
        alert(`Everything is up to date with In Stars And Time`)
    }else if(selection == 5){
        alert(`Cya!`)
    }else {
        alert(`Invalid input`)
    }
}

function greeting(hour){
    if (hour >= 0 && hour<=11 || hour == 24){
        return `Good Morning Stardust`
    }else if (hour >= 12 && hour <=17){
        return `Good Afternoon Stardust`
    }else if (hour >=18 && hour <=23){
        return `Good Evening Stardust`
    }else {
        return `You have an error Stardust, I am only asking for hour and not minutes if that is your problem, if not, get bent`
    }
}
// /else/

function is_number(num){
    if (typeof num == "number"){
        return true
    }
    else {
        return false
    }
}

function which_day(n){
    is_number(n)
    if (n == true){
        if(n == 1){
            return `Sunday`
        }else if(n == 2){
            return `Monday`
        }else if(n == 3 ){
            return `Tuesday`
        }else if(n == 4){
            return `Wedenesday`
        }else if(n == 5){
            return `Thursday`
        }else if(n == 6){
            return `Friday`
        }else if(n == 7){
            return `Saturday`
        }else{
            return `uh... I think something went wrong, would you mind trying again?`
        }
    }
    else{return `uh... I think something went wrong, would you mind trying again?`}
    
}

function guess_10(){
    let guess = +prompt(`Guess a Number from 1 to 10, No higher, No lower`)
    let answer = randint(1,10)
    let is_a_num = is_number(guess)
    if(is_a_num == false){
        alert(`If you typed in "one" instead of "1", please try again, if not, get bent`)
        return `If you typed in "one" instead of "1", please try again, if not, get bent`
    }
    else if(guess == answer){
        alert(`You got it right, the number was ${answer}`)
        return answer
    } 
    else if (guess != answer){
        alert(`You Guessed incorrectly, the answer was ${answer}`)
        return answer
    }
}

//Halloween
function start_game(){
    let name = prompt("Since you are ready for a scare. Will you tell me your name?")
    alert(`(You hear a ghostly voice in your ear)Welcome ${name}, welcome to your new home, in Haunted St. Matthew HS...`)
    let choice = prompt("You come into the school and see two hallways and a stairwell. One hall leads to the Library(1), the other hall leads to the gymnasium(2), the stairwell heads to the darkness below(3)")
    if (choice == 1){
        library()
    }
    if (choice == 2){
        gym()
    }
    if (choice == 3){
        abyss()
    }
}

function library(){
    alert("(You feel the ghostly presence near you and it speaks again) Welcome to your personal Library, we have all sorts of books here")
    let choice_lib=prompt("(The ghostly voice continues) Care to stay? ('1' if yes and '2' if no)") 
    if (choice_lib == 1){
        alert("Immediately, you notice a horrid stench, it is clear that the place is a breading ground for bacteria, as you try and escape, the door locks from the outside, and you slowly die of Dysentery")
        console.log("You died")
        return ("game over")
    }
    if (choice_lib == 2){
        alert("As you leave the library, you feel a ghostly hand on your shoulder, you hear the ghostly voice now whispering in your ear")
        alert("Leaving so soon, I was hoping we would have a bit of fun~")
        let action = prompt("Do you run (1 if yes, 2 if no)")
        if (action == 1){
            alert("You pull away and go into a full sprint, trying to get away from the ghost")
            alert("You barely make it out of the Haunted School with your life")
            console.log("You lived")
            return(`You survived`)
        }
        if (action == 2){
            alert("You feel the hand move off your shoulder, as you turn around to face the ghost, you slowly start to freeze to death")
            alert("You manage to turn around to see the ghost is a tall man, a litle bit over 6ft tall, a brown jacket, a red and black scarf, and white earmuffs, long black hair that falls down his back, he is the last thing you see before you freeze to your core")
            console.log("You died (clover ending)")
            return(`you died`)
        }
    }
}

function gym(){
    alert("As you head through the halls towards the gymnasium, you feel a wave of terror come over you. You stop walking")
    alert("(You hear the ghost speak to you again) What is wrong? You finding your new home... frightening?")
    alert("(In a slightly demonic voice you hear) Keep walking.")
    let choice_gym = prompt("Do you keep walking as told(1), disobey and stay still(2), or head towards the exit(3)")
    if (choice_gym ==1){
        alert("As you keep walking, you feel the ground beneath you collapse in on itself and you start to fall")
        e = prompt("What do you do as you fall? do you accept your death(1) or do you think about your past(2)")
        if (e==1){
            alert("Time around you seems to speed up as you fall to your death, which is quick and painless")
            console.log("You died")
            return(`you died`)
        }
        if (e==2){
            alert("You start to fall slower then normal, hitting the ground softly")
            alert("You are left in the hole to starve")
            console.log("You died")
            return(`you died`)
        }
    }
    if (choice_gym ==2){
        alert("As you stand still, it feels like an eternity, but eventually the hall around you starts to fade out of existence")
        console.log("You lived")
        return(`You Live`)
    }
    if (choice_gym ==3){
        alert("You get hit in the head by a metal pipe and get knocked out")
        alert("");alert("");alert("");alert("");alert("");alert("");
        alert("You wake up to a woman striking nails into your wrists")
        alert("The woman has mostly white hair with streaks of black in it, pale skin, and black pupils that have red x shapes in the middle")
        alert("She looks up at you and says")
        alert("'Prepare your body and mind young one, for you have run out of time'")
        alert("She raises you up off the ground and you hang from a crusifix")
        alert("You are left to die")
        console.log("You died (Zoe Ending)")
        return(`you died`)
    }
}
//loop no work, Srry
function abyss(){
    alert(`As you head down the staircase, it seems to be taking forever to get to the bottom`)
    let torch = prompt("You notice a torch with a green flame, do you walk by(1) or take the torch?(2)")
    if (torch == 1){
        alert("You walk through the darkness") 
        alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("You continue to walk through the darkness");alert("");alert("");alert("");alert("");
        alert("after wandering for so long, you die of starvation")
        console.log("You died")
    }
    if (torch == 2){
        alert("you pick up the torch and you notice a dark humanoid squid entity, it is about 4ft tall, and has a face that resembles a monster from a game you once played (Search shadow leviathen for the face), the face is glowing white, then it attacks you, as it is about to kill you, you hear a voice telling you")
        alert("the voice is haughty, almost mocking you")
        alert("Care to try again?")
        alert("but at this point, it is to late, you are crushed to death by the monsters tenticals")
        console.log("You died")
        return("You died") 
    }
}