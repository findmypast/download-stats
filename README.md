# Package Stats

## Collect download stats for `npm` packages

Learn the basics of building a React App. This won't go into great detail about all features in React but more on the things needed to build an app.

## Install

1. `npm i`
1. `npm i webpack -g`

## Run locally

`npm start` - runs on [localhost:8080](http://localhost:8080/)

## Make it work on Github page

1. `webpack -p` - build your app ready for production.
1. `git commit && push` - push your new build to your repo.

In your Github repo goto `settings` and scroll down to find `Github pages`. Set source to master branch.

## Tech

### [React 15.4](https://facebook.github.io/react/)

- Simple library for building the user interface using components. 
- React components encapsulate functionality and are independent which can be reused.
- Aim to write once and use in multiple places, even in other code bases like React Native. Have a shared library of components.

### ReactJs DOM 15.4

- Separate package for handling DOM specific actions. This use to be part of React.
- We will be using the `ReactDOM.render` in `src/index.js`. This will attach and render our app to the page.

### [React Router 3.0.2](https://github.com/ReactTraining/react-router)

- Componentised way of handling the application routes.

### [Webpack 1.14](https://webpack.js.org/)

- A tool for bundling your assets together.
- JS will be organsied into separated files in your `src` but that is not optimal to make multiple file requests over the wire. Instead it's best to bundle into one file and make a single request.
- There are a range of plugins to extend webpack to transform the `src` code.

### [Babel 6.21](https://babeljs.io/)

- Babel is a popular tool for compiling newer version of JS like ES6 & ES7 to browser compatible JS.
- Using babel plugin for webpack.

### [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)

- Components and elements are just functions and we need to call them to render out our components. However this is not easy to read. JSX creates a mark up similar to HTML making it easy to read.

JSX

```jsx
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

Without JSX

```javascript 
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

**Note**: Applying a CSS class to a component you need to use `className` **not** `class`.

```jsx
# breaks
<div class="myCssClass"></div>

# works
<div className="myCssClass"></div>
```