# React  vegan e-commerce

E-commerce responsive web-application.

### This web-application has both Front-end and simple Back-end parts.
- For front-end I've used React+Redux, Cloud Firestore as a remote database, Stripe API for providing payments.
- Back-end was built with Node.js + Express midlleware.

### Full list of used dependencies are:

Front-end | Back-end
------------ | -------------
react-router-dom | body-parser
memoize | compression
axios | cors
firebase |dotenv
react-redux | express
redux | express-sslify
redux-logger | stripe
redux-persist | concurrently
redux-saga | enzyme
reselect | enzyme-adapter-react-16
react-test-renderer | nodemon
styled-components | 
sweetalert2 | 
react-scroll-up-button | 
react-stripe-checkout |
enzyme | 
enzyme-adapter-react-16 | 
enzyme-to-json | 

## Available scripts:
- Firts of all, clone the project using **`git clone https://github.com/MadInArt/react_e-commerce_shop.git`**. Then go to cloned folder and run **`npm i`** command in both *root* and *client* folders, it will install all required dependencies.  
- To run Back-end on port 5000, in *root* directory execute **`npm start`**;
- To run Front-end, go to the *client* directore and execute **`npm start`** again. Your applciation will be opened on port 3000;
- **`npm test`** command executed in *client* folder will run all written tests and watch for them in live mode.
