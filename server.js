///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();


const cors = require("cors")
const morgan = require("morgan")


// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;
// console.log(PORT, MONGODB_URI)
// import express
const express = require("express");

// create application object
const app = express();


// import design router
const designController = require('./controllers/design-controller')
const mongoose = require('./config/connection')

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI)

///////////////////////////////
// ROUTES
////////////////////////////////
	
// all requests for endpoints that begin with '/design'
app.use('/design', designController)


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
