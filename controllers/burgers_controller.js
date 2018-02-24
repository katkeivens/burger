const express = require("express");
const router = express.Router();
const burger = require('../models/burger.js')

// Use Handlebars to render the main index.html page with the burgers in it.
router.get("/", function(req, res) {

  // call the model method that gets all the burgers
  burger.all(function(err, data) {

    if (err) { return res.status(500).end(); }
    var burgerList =[];
    var burgerDevoured =[];
    data.forEach( burger => {
      if(burger.devoured === 1) {
        burgerDevoured.push(burger)
      } else {
        burgerList.push(burger)
      }
    })
    res.render("index", { burgerList : burgerList, burgerDevoured : burgerDevoured });
  });
});

// Create a new burger
router.post("/burgers", function(req, res) {

  // call the model method that creates burger
  burger.create(req.body.burger_name, function(err, data) {

    if (err) { return res.status(500).end(); }

    res.json({ id: data.insertId });

  })
});

// Retrieve all burgers
router.get("/burgers", function(req, res) {

  burger.all(function(err, result) {
    if (err) { return res.status(500).end(); }
    res.json(result);
  });

});

router.put("/burgers/:id", function(req, res) {
  
  burger.update(req.body.devoured, req.params.id, function(err, data) {
    
    if (err) { return res.status(500).end() }

    if (data.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }

    res.status(200).end();
  })
  
});

// we will use this router in our server.js like so...
// app.use(router);
module.exports = router;


