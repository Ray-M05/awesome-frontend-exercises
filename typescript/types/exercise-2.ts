// Define a type called MyType with two properties: property1 (string) and property2 (number)
export type MyType = {
  property1: string;
  property2: number;
  property3: boolean;
};

// Create a function that takes an argument of type MyType and returns a string
export function describeMyType(obj: MyType): string {
  return `Property1 is ${obj.property1} and Property2 is ${obj.property2} and Property3 is ${obj.property3}`;
}

// Create a variable of type MyType and assign values to it
const myObject: MyType = {
  property1: "Hello",
  property2: 42,
  property3: true,
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
type TypeA = {
  a:string
}

type TypeB = {
  b: number
}

export type IntersectionType = TypeA & TypeB;

export function describeIntersectionType(obj: IntersectionType) {
  return `Property a is ${obj.a} and Property b is ${obj.b}`;
}

const ex2 : IntersectionType = {
  a: "a",
  b: 1,
}

console.log(describeIntersectionType(ex2))

/* Exercise 3:
  1. Define an interface called MyInterface with three properties: prop1 (string), prop2 (number), and prop3 (boolean).
  2. Create a function called describeMyInterface that takes an argument of type MyInterface and returns a string combining all three properties.
  3. Create a variable(myInterfaceObject) of type MyInterface and assign values World for prop1, 100 to prop2 and true to prop3.
  4. Call the function with the variable and log the result.
*/
interface MyInterface {
  prop1: string,
  prop2: number,
  prop3: boolean
}

export function describeMyInterface(obj: MyInterface): string {
  return `Prop1 is ${obj.prop1}, Prop2 is ${obj.prop2}, and Prop3 is ${obj.prop3}`;
}

const myInterfaceObject: MyInterface = {
  prop1: "World",
  prop2: 100,
  prop3: true
}

console.log(describeMyInterface(myInterfaceObject));

/* Exercise 4:
  1. Define a type called FullType with three properties: prop1 (string), prop2 (number), and prop3 (boolean).
  2. Create a new type called ExcludedType that excludes the prop2 property from FullType using the Exclude utility type.
  3. Write a function called describeExcludedType that takes an argument of type ExcludedType and returns a string combining the remaining properties.
  4. Create a variable of type ExcludedType and assign values to  World for prop1 and true to prop3.
  5. Call the function with the variable and log the result.
*/
type ExcludedType = Omit<FullType,"prop2">

export function describeExcludedType(obj: ExcludedType): string {
  return `Prop1 is ${obj.prop1} and Prop3 is ${obj.prop3}`;
}

const excludedObject: ExcludedType = {
  prop1: 'World',
  prop3:true,
};

console.log(describeExcludedType(excludedObject));

/* Exercise 5:
  1. Define a type called FullType with three properties: prop1 (string), prop2 (number), and prop3 (boolean).
  2. Create a new type called OmittedType that omits the prop2 property from FullType using the Omit utility type.
  3. Write a function called describeOmittedType that takes an argument of type OmittedType and returns a string combining the remaining properties.
  4. Create a variable of type OmittedType and assign values to prop1 and prop3.
  5. Call the function with the variable and log the result.
*/
type FullType = {
  prop1: string,
  prop2: number,
  prop3: boolean
};

type OmittedType = Omit<FullType, "prop2">;

export function describeOmittedType(obj: OmittedType): string {
  return `Prop1 is ${obj.prop1} and Prop3 is ${obj.prop3}`;
}

const omittedObject: OmittedType ={
  prop1: 'World',
  prop3:true,
}

console.log(describeOmittedType(omittedObject));
