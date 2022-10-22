//Exercises XP Ninja

//Exercise 1 : Checking The BMI
//Create two objects, each object should hold a person’s details. Here are the details:

const hila = {
    fullName: "hila zamir",
    mass: 50,
    heigth: 1.54,
  };

  const matan = {
    fullName: "matan pinus",
    mass: 83,
    heigth: 1.89,
  };

  function bmi (fullName, calculation=heigth*mass) {
    console.log("my name is " + hila.fullName + " and my mass is " + calculation )
  }

bmi(hila)


//Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
//Outside of the objects, create a JS function that compares the BMI of both objects.
//Display the name of the person who has the largest BMI.

/*


Exercise 2 : Grade Average
- This Exercise is trickier then the others.
You have to think about its structure before you start coding.
You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
Create a function called findAvg(gradesList) that takes an argument called gradesList.
Your function must calculate and console.log the average.

*/
function findAv(gradesToAv) {
  let sum = 0;
  for (i=0; i<grades.length; i++) {
    sum += gradesToAv
  }
  return sum / gradesToAv.length;
}

let grades = [85, 90, 82, 98, 71, 64]
findAv(grades) 


If the average is above 65 let the user know they passed
If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.


