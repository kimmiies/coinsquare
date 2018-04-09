Woo! We've finally got our licensing approved and have made our way into the US market. Watch out Coinbase! Let's allow our US customers to trade shall we?

Hi, I'm Kim!

I believe web development is an iterative process and as such I will complete this assignment in small chunks and improve upon them as I go. To me, patterns emerge as I flow through the process of building a project from scratch. My goal is to wire everything up and create an MVP before refining the work.  

#Iteration One

- Using react-create-app to start project without having to configure webpack
- Built out very basic <Exchange /> component to ensure props and local state flowing correctly
- Wired up Redux for state management. Simple reducers for ui and data. Structures are very primitive and will be changed.
- Dispatching very basic actions with no payload to test that data is flowing properly through the app
- react-create-app has Jest and certain test configs already in place but I have added Enyzme to write some unit tests for components

Thoughts:
- Use JestSnapshot testing

Next Step:
- Fetch Bitcoin Price


#Iteration Two

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
