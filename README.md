Hi, I'm Kim! I'm very excited we finally got our licensing approved and have made our way into the US market. Watch out Coinbase! Let's allow our US customers to trade shall we?

This project was built using [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Task](#task)
- [Sending Feedback](#sending-feedback)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
- [Development Process](#development-process)

## Task

Rebuild `Currency Pair Trading` UI that allows use to complete market trade between US Dollars and Bitcoin
Pull `last_price` from the Bitfinex(BFX) public API:

### Requirements
* Must be made using HTML,CSS and ReactTraining
* Include a state manager (such as Redux )
* Match the UI to design mocks
* Include some form of Testing
* Avoid using frontend libraries such as Bootstrap

### Instructions
* Your account is pre*funded with $156.12 USD. User can trade with any amount
* User can trade any amount <= $156.12 USD
* Fetch the market price of Bitcoin through the public API
* Calculate the quote based on the price of Bitcoin and the USE amount entered by user
* Execute the 'trade' when the Trade button is click and update with new USD and BTC account balance

## Sending Feedback

I am always open to hear [your feedback](mailto:koleiro@gmail.com)

## Available Scripts
These script notes are from React-Create-App repository

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.


## Development Process

I believe web development is an iterative process and as such I will complete this assignment in small chunks and improve upon them as I go. To me, patterns emerge as I flow through the process of building a project from scratch. My goal is to wire everything up and create an MVP before refining the work.  

### Iteration One

- Using react-create-app to start project without having to configure webpack
- Built out very basic <Exchange /> component to ensure props and local state flowing correctly
- Wired up Redux for state management. Simple reducers for ui and data. Structures are very primitive and will be changed.
- Dispatching very basic actions with no payload to test that data is flowing properly through the app
- react-create-app has Jest and certain test configs already in place but I have added Enyzme to write some unit tests for components

Thoughts:
- Use JestSnapshot testing

Next Step:
- Fetch Bitcoin Price


### Iteration Two

- Using axios instead of fetch api for a change. Was having trouble with cors when trying to make a request from my localHost
  With the following error:
    `Failed to load https://api.bitfinex.com/v1/pubticker/btcusd: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access.`
  My workaround was to install a Chrome Extension Allow-Control-Allow-Origi which has allowed me access
- Build out the basic form structure of the trading ui. Still using local state and function names are not yet the greatest
- TO NOTE: Since I am setting the default buy/sell currencies, I am only triggering an API call when the user enters an amount to sell. Using the blur event handler to capture when user interacts with this input field and then changes focus

Next steps:
- Move some local state into state tree
- Add some validations
- Enable/disable trade button

### Iteration Three

- Pulled out the Account Balance markup into separate <AccountBalance /> stateless component
- Kept styles within app.css and exchange.scss for simplicity
- Using BEM (Block, Element, Modifier) convention to help with readability and structure within stylesheets
- Added simple media query for mobile and up

Next steps:
- Move some local state into state tree
- Add some validations
- Enable/disable trade button

### Iteration Four

- Importing state tree and BUY/SELL action creators into <Exchange />
- Wiring everything up!
- Added validation error if amount selling exceeds funds
- TO NOTE: Not yet handling error cases on network request. Not yet enabling/disabling the trade button

Next steps:
- Add tests

### Iteration Five

- Writing unit tests for <Exchange/> component & userReducer
- Using Jest spies to test actions being called
