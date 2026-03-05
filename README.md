## What is JSX, and why is it used?

```JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript code.```

<u>**Used For:**</u>

- **Readability:** It makes visualizing the UI much easier because the code closely resembles the HTML that will be rendered in the browser.
- **Power of JavaScript:** It allows you to seamlessly embed JavaScript logic (variables, functions, loops) directly inside your UI using curly braces {}.
- **Developer Experience:** Under the hood, tools like Babel compile JSX into standard React.createElement() calls. JSX saves you from having to write those verbose and complex function calls manually.

## What is the difference between State and Props?
| Props | State |
| --- | --- |
| Passed down from a parent component. | Initialized and managed within the component itself. |
| It is Read-only. A child component cannot modify its own props. | Mutable. A component can update its own state. |
| Used to configure a component and pass data/callbacks down the component tree. | Used to keep track of dynamic data that changes over time (like user input or API responses). | 

## What is the useState hook, and how does it work?
The useState hook is a special function built into React that allows functional components to have and manage their own local state.
* Initialization: You call useState at the top level of your component, passing the initial value of your state variable.

* Return Values: It returns an array containing exactly two items: The current state variable. A setter function used to update that state.

* Updating: When you call the setter function with a new value, React is notified that the state has changed. It then schedules a re-render of the component to update the UI with the new data.

## How can you share state between components in React?
1. Parent to Child (Using Props): We can pass state down from a parent to a child. Because React data only flows downward, to receive data back from the child, the parent must pass down a function (a callback) for the child to run.

2. Context API: It is a great way to share state globally across your app without having to pass props manually through every single component.

## How is event handling done in React?
Event handling in React is how you make your app interactive, like clicking a button or typing in a text box. It works almost exactly like standard HTML, but with two simple rules we need to remember:

1. __Use camelCase:__ Event names are written with a capital letter in the middle. For example, you use onClick instead of onclick, and onChange instead of onchange.

2. __Pass a function:__ Instead of passing a string of code in quotes, you pass a JavaScript function inside curly braces {}.

__For Example:__ ```<button onClick={handleClick}>Click Me</button>```