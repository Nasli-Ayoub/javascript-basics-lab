// Declare variables and log to the console
let studentName = "Nasli Ayoub";   // String variable
let studentAge = 23;              // Number variable
let isEnrolled = true;            // Boolean variable
let courses = ["JavaScript", "Operating Systems", "Algorithms", "Data Concepts", "Web Programming"];  // Array

// Log variables to the console
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Is Enrolled:", isEnrolled);
console.log("Courses Enrolled:", courses);

// Demonstrate basic data types
console.log("String Example:", studentName);  // String
console.log("Number Example:", studentAge);   // Number
console.log("Boolean Example:", isEnrolled);  // Boolean
console.log("Array Example:", courses);       // Array

// Demonstrate an object
let student = {
    firstName: "Nasli",
    lastName: "Ayoub",
    age: studentAge,
    isEnrolled: isEnrolled,
    courses: courses
};
console.log("Student Object:", student);

// Use basic operators
let totalCredits = 0 + 5;  // Addition
console.log("Total Credits:", totalCredits);

let remainingCredits = 24 - 5;  // Subtraction
console.log("Remaining Credits:", remainingCredits);

let creditProgress = (5/24) * 100;  // Division and Multiplication
console.log("Credit Progress:", creditProgress + "%");

console.log("Is Age Greater than 18:", studentAge > 18);  // Comparison Operator
console.log("Is Enrolled and Graduated:", isEnrolled && false);  // Logical Operator