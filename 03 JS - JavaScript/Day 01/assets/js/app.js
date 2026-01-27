"use Strict";

console.log("Hello World!");

console.log("This is JavaScript Testing....");

console.error("Error");

let fullName = "Saram", // String
  age = 34, // Number
  friend = [
    "U Kyaw Naing",
    "Inkaram",
    "Uncle Wahat",
    "HJ Karsim",
    "U Arish Bai",
  ], // Array
  info = {
    fullName,
    age,
    address: "No. 8/30, Mae Sot, Tak",
    postal: 63110,
    friend,
    job: "Sale Staff",
  }; // Obj

console.log(info);
console.table(info);

console.log(" Operators ".padStart(21, "#").padEnd(31, "#"));
console.log(" Arithmetic Operators ".padStart(31, "#").padEnd(41, "#"));

let num1 = 100,
  num2 = 5;

console.log(num1 + num2); // addition
console.log(num1 - num2); // subtraction
console.log(num1 * num2); // multiplication
console.log(num1 ** num2); // Exponentiation
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus
console.log(num1++); // Increment
console.log(num1--); // Decrement

console.log(" Assignment Operators ".padStart(31, "#").padEnd(41, "#"));

let x = 9; // Assignment // 0000 1001
let y = 5; // Assignment
// x += y; // Additional Assignment
// x -= y; // Subtraction Assignment
// x *= y; // Multiplication Assignment
// x /= y; // Division Assignment
// x %= y; // Reminder Assignment
// x **= y; // Exponentiation Assignment
// x <<= 2; // Left Shift Assignment - 0010 0100
// x >>= 2; // Left Shift Assignment - 0000 10001
// x = 9 // 1001
// x >>>= 1; // Unsigned Right Shift Assignment - 0100
// x >>>= 1; // 0010
// x >>>= 1; // 0001

// x &= y; // Bitwise AND Assignment

/*

x = 9 

1001 = 9
0101 = 5
------
0001 = 1

output = 1;


*/

// x ^= y; // Bitwise XOR Assignment

/*

x = 9 

1001 = 9
0101 = 5
------
1100 = 12

output = 12;


*/

x |= y; // Bitwise OR Assignment

/*

x = 9 

1001 = 9
0101 = 5
------
1101 = 13

output = 13;


*/

console.log(x);

console.log(" Comparison Operators ".padStart(31, "#").padEnd(41, "#"));

console.log(x == y); // Equal
console.log(x != y); // Not Equal
console.log(2 != "2");
console.log(2 === 2); // Strict Equal
console.log(2 !== "2"); // Not Strict Equal
console.log(2 > 3); // Greater than
console.log(3 >= 2); // Greater than Equal
console.log(2 < 3); // Less Than
console.log(2 <= 2); // Less Than Equal

console.log(" Ternary Operators ".padStart(31, "#").padEnd(41, "#"));

console.log(5 > 4 ? "True" : "False"); // it's expression

3 < 2 ? console.log("This is True") : console.log("This is False");
