// Here I will be inserting the code from Codecademy to have a log of it essentially

// Introduction to code flow: Essentially loops

let userName = '';
let knowsJavaScript = false;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

// If and Else Statement Code

 let isSoccerFan = false;
if (isSoccerFan === true){
  console.log('Goal!')
}
else{
  console.log('No Goal')
}

// Note that at the end of this loop I don't need to say specifically to end

let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Gotta change the statements so that they read as trye now

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 1;

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// This time we are going to use the same code as above but make it so that the statement in the else block is displayed for fav phase. Using !

let wordCount = 0;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 1;

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Simple if/else code, but using the comparison signs

let hungerLevel = 10;

if (hungerLevel > 7){
  console.log('Time to Eat')
}
else {
  console.log('We can eat later')
}


let moonPhase = 'full';

if(moonPhase === 'full'){
   console.log('Howl!')
   }
   else{
   console.log('I swear I am not a werewolf!')
   }
   
   // Else if statement exercise
   
   let moonPhase = 'full';

if(moonPhase === 'full'){
   console.log('Howl!');
   }
else if(moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
}
else if(moonPhase === 'mostly new'){
        console.log('Back on two feet');
        }
   else{
   console.log('Invalid moon phase');
   }
   
   // Conditioinal opperators 
   
   let moonPhase = 'full';
let isFoggyNight = false;

if(moonPhase === 'full' || isFoggyNight === true){
   console.log('Howl!');
   }
else if(moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
}
else if(moonPhase === 'mostly new'){
        console.log('Back on two feet');
        }
   else{
   console.log('Invalid moon phase');
   }
   
   // Switch Statements
   
   let moonPhase = 'full';

switch(moonPhase){
  case 'full':
   console.log('Howl!');
    break;
  case 'mostly full':
  console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
        console.log('Back on two feet');
    break;
  default:
   console.log('Invalid moon phase');
    break;
   }


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

