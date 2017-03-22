# Package Stats

## Collect download stats for `npm` packages

Learn the basics of building a React App. This won't go into great detail about all features in React but more on the things needed to build an app.

## Install

1. `npm i`
1. `npm i webpack -g`

## Run locally

`npm start` - runs on [localhost:8080](http://localhost:8080/)

## Tech

### [React 15.4](https://facebook.github.io/react/)

- Simple library for building the user interface using components. 
- Functionality is encapsulated into a React component which can be reused.
- Write once and use in multiple places, even in React Native.

### ReactJs DOM 15.4

- Another package for handling DOM specific actions. Use to be one library
- We will be using the `ReactDOM.render` in `src/index.js`

### [React Router 3.0.2](https://github.com/ReactTraining/react-router)

- Componentised way of handling the application routes.

### [Webpack 1.14](https://webpack.js.org/)

- A tool for bundling your assets together.
- JS will be organsied into seperated files in your `src` but that is not optimal to make multiple file requests in production. Instead it's best to bundle into one file and make a single request.
- There are a range of plugins to extend webpack to transform the `src` code.

### [Babel 6.21](https://babeljs.io/)

- Babel is a tool for compiling newer version of JS like ES6 to browser compatible JS.
- We are using babel plugin for webpack.

### [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)

- Components and elements are just functions and we need to call them to render out to the page. However this is not easy to read. JSX creates a mark up style of coding which is easy to read.

jsx

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

javascript
```javascript 
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```