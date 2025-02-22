# Guide Types in TypeScript

TypeScript provides several basic types that help you build robust and type-safe applications. Here is a guide to understanding and using these types effectively.

## Basic Types

This guide covers the basic types in TypeScript, providing examples to help you understand how to define and use them in your code.

### 1. String

**Define a variable of type string and assign it a value:**

```typescript
const myString: string = "Hello, TypeScript!";
```

### 2. Number

**Define a variable of type number and assign it a value:**

```typescript
const myNumber: number = 42;
```

### 3. Boolean

**Define a variable of type boolean and assign it a value:**

```typescript
const myBoolean: boolean = true;
```

### 4. Array

**Define an array of numbers:**

```typescript
const myNumberArray: number[] = [1, 2, 3, 4, 5];

// or

const myNumberArray: Array<number> = [1, 2, 3, 4, 5];
```

### 5. Tuple

**Define a tuple with a string and a number:**

```typescript
const myTuple: [string, number] = ["Age", 30];
```

### 6. Enum

**Define an enum with a few values:**

```typescript
enum Colors {
  Red,
  Green,
  Blue,
}
const myColor: Colors = Colors.Green;
```

### 7. Function

**Define a function that takes two numbers and returns their sum:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

### 8. Object

**Define an object with specific properties:**

```typescript
const person: { name: string; age: number } = {
  name: "John",
  age: 25,
};
```

### 9. Union Type

**Define a variable with a union type (string or number):**

```typescript
let myUnion: string | number;
myUnion = "Hello";
myUnion = 123;
```

### 10. Type Alias

**Define a type alias for an object with specific properties:**

```typescript
type Car = {
  make: string;
  model: string;
  year: number;
};

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
```

## More Complex Types 

### 11. Type Definition

**Define a custom type:**

```typescript
type MyType = {
  property1: string;
  property2: number;
};
```

### 12. Function Type

**Define a type for a function that takes a string and returns a number:**

```typescript
type StringToNumberFunction = (input: string) => number;

const myFunction: StringToNumberFunction = (input) => {
  return input.length;
};
```

### 13. Void Function

**Define a function that returns void:**

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

### 14. Intersection Types

**Combine multiple types using intersection (&):**

```typescript
type Person = {
  name: string;
};

type Employee = Person & {
  employeeId: number;
};

const employee: Employee = {
  name: "Alice",
  employeeId: 1234,
};
```

### 15. Interface

**Define an interface and extend it:**

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};
```

### 16. Exclude

**Exclude specific types from a union type:**

```typescript
type AllTypes = string | number | boolean;

// Exclude boolean from the definition of ExcludeTypes, keeping only string and number
type ExcludedTypes = Exclude<AllTypes, boolean>;

let myVar: ExcludedTypes;
myVar = "Hello";
myVar = 42;
```

### 17. Omit

**Omit specific properties from a type:**

```typescript
type FullPerson = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<FullPerson, "address">;

const person: PersonWithoutAddress = {
  name: "John",
  age: 30,
};
```

### 18. Extract

**Extract specific types from a union type:**

```typescript
type AllTypes = string | number | boolean;
type StringOrNumber = Extract<AllTypes, string | number>;

let myVar: StringOrNumber;
myVar = "Hello";
myVar = 42;
```

### 19. Literal Types

**Define a literal type with specific string values:**

```typescript
type Status = "active" | "inactive" | "pending";

let status: Status = "active";
```

### 20. Generics

**Define a generic function that returns the input value:**

```typescript
function identity<T>(value: T): T {
    return value;
}

const stringIdentity = identity<string>("Hello");
const numberIdentity = identity<number>(42);
```

### 21. Partial

**Make all properties of a type optional:**

```typescript
type Person = {
    name: string;
    age: number;
};

type PartialPerson = Partial<Person>;

const person: PartialPerson = {
    name: "John",
};
```

### 22. Required

**Make all properties of a type required:**

```typescript
type PartialPerson = {
    name?: string;
    age?: number;
};

type RequiredPerson = Required<PartialPerson>;

const person: RequiredPerson = {
    name: "John",
    age: 30,
};
```

### 23. Pick

**Create a type by picking a subset of properties from another type:**

```typescript
type Person = {
    name: string;
    age: number;
    address: string;
};

type PersonNameAndAge = Pick<Person, "name" | "age">;

const person: PersonNameAndAge = {
    name: "John",
    age: 30,
};
```

### 24. Omit

**Create a type by omitting certain properties from another type:**

```typescript
type Person = {
    name: string;
    age: number;
    address: string;
};

type PersonWithoutAddress = Omit<Person, "address">;

const person: PersonWithoutAddress = {
    name: "John",
    age: 30,
};
```