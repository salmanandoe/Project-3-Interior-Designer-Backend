const express = require('express')
const router = express.Router()
const {Design} = require('../models')
const mongoose = require('../config/connection')
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

router.get("/id/:id", async (req, res) => {
    try {
        console.log(req.params.id)
    const id = req.params.id
        res.json(await Design.findById(id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
    });


module.exports = router
