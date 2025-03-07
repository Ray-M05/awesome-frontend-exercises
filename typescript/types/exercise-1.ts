// Exercise 1: Define a variable with a string type and assign it a value
let myString: string = "Hello World";

// Exercise 2: Define a variable with a number type and assign it a value
let myNumber: number = 5;

// Exercise 3: Define a variable with a boolean type and assign it a value
let myBoolean: boolean = true;

// Exercise 4: Define an array of numbers
let myNumberArray: number[] = [1,2];

// Exercise 5: Define an array of strings
let myStringArray: string[] = ["1","2"];

// Exercise 6: Define a tuple with a string and a number
let myTuple: [number, string] = [1,'a'] ;

// Exercise 7: Create an enum with three values and assign it to a variable
enum MyEnum {
  High,
  Medium,
  Low
}
let level: MyEnum = MyEnum.High

// Exercise 8: Define an object interface with specific properties and assign it to a variable
interface MyObject {
  level: string;
  ocupation: string;
  years: number
}
let person: MyObject = {
  level: "high",
  ocupation: "fe",
  years: 19
}

// Exercise 9: Define a function that takes two numbers and returns their sum, take a look at the function signature
function addNumbers(a: number, b: number): number {
  return a+b
}

// Exercise 10: Define a function that takes a string and returns its length, take a look at the function signature
function getStringLength(str: string): number {
  return str.length
}
