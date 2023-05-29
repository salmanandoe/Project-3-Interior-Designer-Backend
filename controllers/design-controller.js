const express = require('express')
const router = express.Router()
const {Design} = require('../models')

///////////////////////////////
// ROUTES
////////////////////////////////

// DESIGN INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all design
    res.json(await Design.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// // DESIGN CREATE ROUTE
// router.post("/", async (req, res) =>  {
// 	res.status(201).json({message: "design create route"})
// });

module.exports = router
