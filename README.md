# Dev Stack

## Project Description

Dev Stack is a responsive developer technology stack management website. 
Users can explore different development technologies and add their favorite 
technologies to their personal stack.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- Vite
- React Toastify
- JSON
- JavaScript ES6+
- Git & GitHub

## Features

1. Users can explore different technologies with their category, difficulty, rating, and description.

2. Users can add technologies to their personal stack and remove individual technologies or remove all technologies.

3. The website is fully responsive and includes toast notifications and visual feedback when a technology is added to the stack.

4. ## React Questions & Answers

### i. What is JSX and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

### ii. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### iii. What does the useState hook do, and where did you use it in this project?

The `useState` hook is used to store and update component data. In this project, I used it to store the technologies added to the user's stack.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs code after a component renders. I used it to fetch and load the technology data from the JSON file when the component loads.

### v. Why does every item in a .map() list need a unique key prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI based on a condition. I used it to show the empty stack message when no technology has been added.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {stack.map((tech) => (
      <p key={tech.id}>{tech.name}</p>
    ))}
  </div>
)}
