/*
*************************CODING TASK*********************************
1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console
   as an additional information the student name and his points
7. Test (console log it) all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and
   Matt failed; d. both students failed).
*/

// SOLUTION:

const matt = 80;
const simon = 45;
const lower = 51;
if(matt >= lower && simon >= lower){
   console.log("both passed");
} else if (matt >= lower || simon >= lower){
   if(matt > simon){
      console.log("matt passed")
   }else {
      console.log("simon passed")
   }
} else {
   console.log("both failed")
}