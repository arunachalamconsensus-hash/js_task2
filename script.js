// Part 1: Variables and Data Types (5 Questions)
// Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.
var name = "Arun";
name = "Kumar";
var name = "Arun Kumar";
let age = 25;
age = 30;
// let age = 35; // Cannot redeclare in the same scope
const country = "India";
// country = "USA"; // Cannot reassign const
console.log(name);
console.log(age);
console.log(country);

// Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.
var name = "Arun";
var ag = 25;
let programmingKnowledge = true;
console.log(name);
console.log(typeof name);
console.log(ag);
console.log(typeof ag);
console.log(programmingKnowledge);
console.log(typeof programmingKnowledge);

// Create an array of 5 fruits. Print the complete array, the first element, and the last element.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// Create an object containing your name, role, and CGPA. Print each property separately.
let student = {
    name: "Arun",
    role: "Frontend Developer",
    cgpa: 8.5
};
console.log(student.name);
console.log(student.role);
console.log(student.cgpa);

// Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.
var name = prompt("Enter your name:");
var ag = prompt("Enter your age:");
alert("Hello " + name);
console.log("Age:", ag);

// Part 2: Operators (7 Questions)
// Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.

// Predict the output:
// let a = 5;
// console.log(a++);//5
// console.log(a);//6
// console.log(++a);//7

// 8. Predict the output:
// let a = 10;
// let b = a--;
// let c = --a;
// console.log(a);//8
// console.log(b);//10
// console.log(c);//8

// Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.
let x = 20;

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);

x %= 5;
console.log(x);

// Predict the results of these comparisons:
// console.log(5 == "5");//true
// console.log(5 === "5");//false
// console.log(10 != "10");//false
// console.log(10 !== "10");//true

// Use &&, ||, and ! to check different combinations of conditions.
let a = 25;
let hasLicense = true;
console.log(a >= 18 && hasLicense);
console.log(a >= 18 || hasLicense);
console.log(!hasLicense);

// Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.
let ag1 = 20;
let result = ag1 >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

// Part 3: Type Casting and Conditions (6 Questions)
// Predict the data type of each expression:
// console.log(typeof ("hello" + 10));//string
// console.log(typeof (10 + true));//number
// console.log(typeof (10 + null));//number
// console.log(typeof ("hello" + undefined));//string

// Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.
let num = prompt("Enter a number:");
num = Number(num);
alert(num + 10);

// Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(0));
console.log(Boolean(true));

// Write an if-else statement to check whether a number is positive or not.
let n = Number("Enter a Number:");
if (n > 0) {
    alert("Positive number");
} else {
    alert("Not a positive number");
}

// Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.
let time = Number(prompt("Enter the time (1-24):"));
if (time >= 1 && time < 6) {
    alert("Night");
} else if (time >= 6 && time < 10) {
    alert("Early Morning");
} else if (time >= 10 && time < 13) {
    alert("Morning");
} else if (time >= 13 && time < 18) {
    alert("Afternoon");
} else if (time >= 18 && time < 22) {
    alert("Evening");
} else if (time >= 22 && time <= 24) {
    alert("Night");
} else {
    alert("Invalid time");
}

// Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.
let ag2 = prompt("Enter Your age:");
let height = prompt("Enter Your height:");
let weight = prompt("Enter Your weight:");
if (ag2 >= 18) {
    if (height >= 160) {
        if (weight >= 50) {
            alert("Eligible");
        } else {
            alert("Weight requirement not satisfied");
        }
    } else {
        alert("Height requirement not satisfied");
    }
} else {
    alert("Age requirement not satisfied");
}

// Part 4: Switch and Loops (8 Questions)
// Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.
let color = prompt("Enter traffic light color:");
switch (color.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.error("Invalid color");
}

// Use a for loop to print numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Use a for loop to print all even numbers from 2 to 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Use a while loop to print numbers from 10 down to 1.
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Use a do-while loop to print numbers from 1 to 10.
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);

// Use a for-of loop to print each character in the string "JavaScript".
let language = "JavaScript";
for (let character of language) {
    console.log(character);
}

// Use a for-of loop to print every element in an array of 5 student names.
let students = ["Arun", "Priya", "Rahul", "Karthik", "Divya"];
for (let student of students) {
    console.log(student);
}

// Use a for-in loop to print all keys and values of this object:
// let student = {
//     name: "Priya",
//     role: "Frontend Developer",
//     cgpa: 9
// };
let student1 = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
for (let key in student1) {
    console.log(key, ":", student1[key]);
}

// Part 5: Mixed Practice (4 Questions)
// Take two numbers using prompt() and display their sum, difference, product, and remainder.
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
alert("Sum:", num1 + num2);
alert("Difference:", num1 - num2);
alert("Product:", num1 * num2);
alert("Remainder:", num1 % num2);

// Create an array of 5 numbers and use a loop to print only the numbers greater than 10.
let numbers = [5, 15, 8, 20, 12];
for (let num of numbers) {
    if (num > 10) {
        console.log(num);
    }
}

// Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
let age3 = Number(prompt("Enter your age:"));
if (age3 >= 18) {
    alert("You are eligible.");
} else {
    alert("You are not eligible.");
}

// Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.
let operation = prompt(
    "Enter operation: addition, subtraction, multiplication, or division"
);

let num3 = Number(prompt("Enter first number:"));
let num4 = Number(prompt("Enter second number:"));

switch (operation.toLowerCase()) {
    case "addition":
        console.log("Result:", num3 + num4);
        break;

    case "subtraction":
        console.log("Result:", num3 - num4);
        break;

    case "multiplication":
        console.log("Result:", num3 * num4);
        break;

    case "division":
        if (num4 !== 0) {
            console.log("Result:", num3 / num4);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operation");
}
