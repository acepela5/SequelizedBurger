
var express = require("express");

var router = express.Router();


var db = require("../models");


//GET
router.get("/", function (req, res) {
    console.log("get all")
    db.Burger.findAll({}).then(function (dbBurger) {
        var hdbobj={
            burgers: dbBurger
        }
        res.render("index", hdbobj);
    });
});

//POST
router.post("/api/burgers", function (req, res) {
    console.log(req.body)

    db.Burger.create({
        burger_name: req.body.name,
        devoured: false

    }).then(function (dbBurger) {
        res.json(dbBurger);
    });
});

//PUT
router.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
//update table
        burger_name: req.body.name,
        devoured: true
    },
        {
            where: {
                id: req.params.id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger);
        });
});

module.exports = router