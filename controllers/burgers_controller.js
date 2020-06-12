var express = require("express");

var router = express.Router();

var burger = require("../models/burgerModel.js");


  router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {

   
    console.log("req object from within controller: " + req.body.name);
    if(req.body.name === '' || req.body.name.length > 35) {
      return res.status(404).end();
    } else { 
      burger.selectAll(function(data) {
        burger.insertOne([
          "burger_name"
        ], [
          req.body.name
        ], function(result) {
          res.json({ id: result.insertId });
        });
      });
    }
  });

  router.put("/api/burgers/:id", function(req, res) {
    console.log("req.params.id: " + req.params.id);
    var condition = 'id = ' + req.params.id;
    console.log("condition: " + condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });

});
module.exports = router;