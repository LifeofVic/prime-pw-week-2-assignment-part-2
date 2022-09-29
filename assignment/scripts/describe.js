// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We let the variable "number" equal to 1 as a number. 
// The variable "number" is then incremented by the number++ or also seen as "number = number + 1".
// The variable "number" is now equal to 2.
// In the 'if' statement, if the value of 'number' is greater than and equal to the value '2', then coduct the console.log which will output 'yes'. 
// Since the value for 'number' is "2", the console.log will execute and the output will be "yes".  


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We let the variable "name" equal to "Dane" as a string.
// In the "if" statement condition, the variable "name" is equal in value and in data type since the condition of the "if" statements has 3 equals. 
// Since, the variable "name" was already declared to "Dane" before the 'if' statement then the console.log('Hi, Mary!') will not be executed but will instead jump to the else statement where it will execute the console.log('How do you do?) as it failed to meet the conditons of the "if " statement. The output will then be "How do you do?".  
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variable "secret" with no data type. We also let the variable code equal to the values 123. 
// In the 'if' statement, the conditions are stating if the value in the variable 'code' is equal to both data type and value "123" then execute the the following code within the following brackets. Since the declared variable 'code' is equal to 123 by data type and value then we let 'secret' equal to 'super'. The value of variable 'secret' will now contain 'super'.  
// The following line will have the value in code - "123" become multiplied by 2 and that value '246' will now be equal to 'code'. 
// Since code has a value of '246' neither if statements will be executed. 
//The console.log(secret) will have an output of "super". 



//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// *******  Description for code above.  *********
// We set the variable 'isStudent' to 'true' a boolean data type. 
// We set the variable 'age' equal to '34' as a number. 
// We let the variable 'zip' equal to '55407' as a number. 
// First if statements has a condition stating that if the boolean value of 'isStudent' is equal in data type and value to "true" as well as if the variable 'zip' is greater than the value '80000' then the console.log('You're a student on the West Coast!'). Since this condition is not met with the values in our declared variables we skip this statement and move  to the next one. 
// The first else if statement has a condition stating that the  boolean value for 'isStudent' is 'true' then console.log for that condition will be executed. 
// Since this conditons is fuly met as 'isString' has both data type and value matching up to the condition then the console.log will output "Welcome to Prime!". 



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

 // FIX - change string value to 'blue'
let colorOne = 'red';
// FIX - change string value to 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {

  //Set this to both variables equal to 'purple' 
  //Correction:   colorOne = colorTwo = 'purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// The 'let' will allow for the variable to freely change if need be, but here it will be best to have it as 'const temp = 40". "
let temp = 40;
const time = 4;

// Fix - This will have to use the '&&' operator as this will check for both expressions for a 'false' statement, if none are found then that makes the entire expression 'true' will then chose the latest operations results and be able to output the console.log("throw away food") 
//Here we need to make sure both expressions are true to be able to output the consolo.log. 
if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}   
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

