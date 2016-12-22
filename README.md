# NODE ES6 STARTER KIT
Basic setup for new Node.js ES6 projects including Mocha for unit testing. There are plenty of boilerplates available, but this was done to become more comfortable with Webpack, Eslint, and Mocha.

To run the Mocha tests:  
`$ npm run test`

To run Webpack and build the app:  
`$ npm run build`

Finally run the app:  
`$ npm run app`

### Usage of Eslint
- *in /src/.eslintrc.js*: since in Node.js you need the console for debugging, there is a specific rule `"no-console": 0` to avoid being notified
- *in /test/.eslintrc.js*: `"env: { "mocha": true }"` this will stop 'undefined function' errors that happen with all the global functions defined by Mocha
- *in /test/.eslintrc.js*: the use of lambda functions is not practical because of the Mocha context that becomes inaccessible so `"prefer-arrow-callback": 0` 
