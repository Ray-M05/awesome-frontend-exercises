// Define a type called MyType with two properties: property1 (string) and property2 (number)
export type MyType = {
  property1: string;
  property2: number;
};

// Create a function that takes an argument of type MyType and returns a string
export function describeMyType(obj: MyType): string {
  return `Property1 is ${obj.property1} and Property2 is ${obj.property2}`;
}

// Create a variable of type MyType and assign values to it
const myObject: MyType = {
  property1: "Hello",
  property2: 42,
};

// Call the function with the variable and log the result
console.log(describeMyType(myObject));

/* Exercise 1:
    1. Modify the MyType type to add a new property called property3 of type boolean.
    2. Update the describeMyType function to include the new property in the returned string.
    3. Create a new variable of type MyType with the updated structure and test the function again.
*/


/* Exercise 2:
    1. Define two types: TypeA with a property a (string) and TypeB with a property b (number).
    2. Create a new type called IntersectionType that combines TypeA and TypeB using an intersection type.
    3. Write a function called describeIntersectionType that takes an argument of type IntersectionType and returns a string combining both properties.
    4. Create a variable of type IntersectionType and assign values to it.
    5. Call the function with the variable and log the result.
*/

export type IntersectionType = {}

export function describeIntersectionType(obj: IntersectionType) {
  return `Property a is ${obj.a} and Property b is ${obj.b}`;
}