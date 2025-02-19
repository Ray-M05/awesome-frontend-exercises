// filepath: /Users/chao/Documents/projects/ElFrontend/awesome-frontend-exercises/javascript/script.js
document.addEventListener('DOMContentLoaded', () => {
    // Your main JavaScript logic goes here

    // Example: DOM manipulation
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });

    // Example: Event handling
    const inputField = document.getElementById('myInput');
    inputField.addEventListener('input', (event) => {
        console.log('Input value:', event.target.value);
    });

    // Additional JavaScript functionality can be added here
});