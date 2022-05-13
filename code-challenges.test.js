// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// --------------------1) 
// Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


// a) Create a test with an expect statement using the variable provided.


describe("aboutPeople", (array) => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
      expect(aboutPeople(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})


// ******* RED FAILURE *******
// ● aboutPeople › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
// ReferenceError: aboutPeople is not defined




// b) Create the function that makes the test pass.



// ******* PSUEDOCODE *******
// input = array of objects
  // map over array of objects by referencing the keys
  // .split(" ") --> splits name key into 2 elements
    // .toUpperCase() the zero index of each element
  // Because of the split only the zero index, or first letter will print
    // .substring(1) to print the remainder of the word beginning with index 1
// output = array of sentences containing the capitalized names and lowercase occupation
  


// Attempt #940523 (the closest "dynamic" solution without being the solution)
// This solution prints the full sentence with only the first letter of the first name capitalized.
// aboutPeople = (array) =>{
  //   return array.map(
  //     value => `${value.name[0].toUpperCase()}` +
  //             `${value.name.substring(1)}` + 
  //             ` is ${value.occupation}.` )
  // }



  aboutPeople = (array) => {
    return array.map(
      ({name, occupation}) => {
        twoNames = name.split(" ")
        return (
          twoNames[0][0].toUpperCase() + 
          twoNames[0].substring(1) + " " +
          twoNames[1][0].toUpperCase() + 
          twoNames[1].substring(1) + " is " +
          occupation + "."
        ) 
      }
    )
  }

// ******* GREEN FAILURE *******
// PASS  ./code-challenges.test.js
// aboutPeople
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
  

// Research that helped provide clarity for the solution above: https://stackoverflow.com/questions/58509981/destructuring-an-array-of-objects-es6







// --------------------2) 
// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.



// a) Create a test with an expect statement using the variables provided.


describe("onlyRemainders", (array) => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ******* RED FAILURE *******
// ● onlyNums › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
// ReferenceError: onlyNums is not defined




// b) Create the function that makes the test pass.


// ******* PSUEDOCODE *******
// input = array with mixed data types 
  // filter array for integer data type only
  // modulo 3 for each integer
// output = array with only integer data type  
  // array contains the remainders of numbers from the original array divided by 3
  // return the results of each integer modulo 3


  onlyRemainders = (array) => {
    let onlyNums = array.filter(value => typeof value === "number")
    return onlyNums.map(value => value % 3)
  }

// ******* GREEN FAILURE *******
// PASS  ./code-challenges.test.js
// onlyRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total





// ******* REFACTOR *******

onlyRemainders = (array) => {
    return array.filter(value => typeof value === "number").map(value => value % 3)
  }

// PASS  ./code-challenges.test.js
// onlyRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total





// --------------------3) 
// Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.



// a) Create a test with an expect statement using the variables provided.


describe("sumOfCubes", (array) => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
      expect(sumOfCubes(cubeAndSum1)).toEqual(99)
      expect(sumOfCubes(cubeAndSum2)).toEqual(1125)
  })
})

// ******* RED FAILURE *******
// ● sumOfCubes › takes in an array of numbers and returns the sum of all the numbers cubed
// ReferenceError: sumOfCubes is not defined




// b) Create the function that makes the test pass.


// ******* PSUEDOCODE *******
// input = array of numbers
  // map over and cube each number
// output = a single number


sumOfCubes = (array) => {
  let cubed = array.map(value => value ** 3)
  return cubed.reduce((a,b) => a + b)
}


// ******* GREEN FAILURE *******
// PASS  ./code-challenges.test.js
// sumOfCubes
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// Research that helped provide clarity for the solution above: https://dev.to/ramgendeploy/learn-javascript-reduce-method-with-5-examples-128n




// ******* REFACTOR *******

sumOfCubes = (array) => {
  return array.map(value => value ** 3).reduce((a,b) => a + b)
}

// PASS  ./code-challenges.test.js
// sumOfCubes
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total