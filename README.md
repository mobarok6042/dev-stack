# 🚀 Stack Learning Hub

A modern and beginner-friendly web application designed to help users explore and learn about different technologies, programming languages, frameworks, tools, and development stacks. Users can browse technology information, check ratings and difficulty levels, and select their preferred technologies to build their learning stack.


 Technologies Used

 **React.js**
 **JavaScript (ES6)**
 **Tailwind CSS**
 **DaisyUI**
 **React Icons**
 **JSON**
 **Vite**

 Key Features

1. Technology Stack Explorer

Explore different technologies from categories such as Frontend, Backend, Database, Programming Language, Styling, DevOps, and Tools.

2. Technology Selection

Users can select technologies they want to learn and easily remove them from their selected learning stack.

3. Dynamic Data & Responsive UI

Technology information is loaded dynamically from JSON data, and the application provides a responsive interface that works across different screen sizes.

---



 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. React uses JSX because it makes the UI structure easier to write, read, and understand.

 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. They are read-only.

State is data managed inside a component. When state changes, React updates the UI.

 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage changing data inside a React component.

In this project, I used useState to manage the selected technology stacks and update them when a user selects or removes a technology.

 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component.

I used it to load the JSON data when the component starts, so the technology information can be displayed dynamically in the application.

 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list. It helps React understand which items have changed, been added, or removed and update the UI efficiently.

 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, I used conditional rendering to show an empty stack message when the user has not selected any technology.



 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using **props**.

If the child needs to send something back to the parent, the parent can pass a **function as a prop**. The child can then call that function with the required data.

