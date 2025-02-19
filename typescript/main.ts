// filepath: /Users/chao/Documents/projects/ElFrontend/awesome-frontend-exercises/typescript/main.ts
// Main TypeScript logic for the project

// Example of a simple TypeScript class
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}!`;
    }
}

// Example usage
let greeter = new Greeter("world");
console.log(greeter.greet()); // Output: Hello, world!