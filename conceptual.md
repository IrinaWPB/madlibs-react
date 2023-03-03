### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a popular JS framework/library that helps create front-end apps. Makes code very stuctured, organized and easy to read.

- What is Babel?
  
Babel is a compliler that helps to translate and work with newer features of Java Script

- What is JSX?
  
JSX is extention to JS that allows add nd manipulate HTML elements in the JS files.

- How is a Component created in React?

Component is a separate element of DOM(usually created when complicated/large or needs to be reused). Can be created 
via JS class or function. 

- What are some difference between state and props?
  
State is used within component, props are passed to the components.
State can be changed while props are read-only

- What does "downward data flow" refer to in React?
  
Passing data from parent to child via props

- What is a controlled component?

Data is controlled by the state within the component.

- What is an uncontrolled component?
  
Data is not controlled by component, it's controlled by DOM

- What is the purpose of the `key` prop when rendering a list of components?

 It creates relationship betwwen component and DOM element. Key prop helps find and work with elements faster. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  
Array index shouldn't be used as a key prop when array is not static, because indexes will change.

- Describe useEffect.  What use cases is it used for in React components?

Built in hook that allows you work with side effects. It runs after each render by default. First argument is function("side effect") to run and second argument will show when to run this 
function. It's an array of items, the function will run each time one of the items is changed. The empty array will tell React to only run function after first render of the component.
  - fetching Data
  - working with timers
  - changing DOM elements

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  
Is used to keep values between renders.
   - accessing DOM elements
   - working with timers

Change of the ref does not cause a component rerender

- When would you use a ref? When wouldn't you use one?

When there is no other way to access a DOM element for example.

- What is a custom hook in React? When would you want to write one?
  
When function is used more than once or looks large and complicated. You can create a custom hook and the use it in the components 
