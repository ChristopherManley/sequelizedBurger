// Dependencies
// =============================================================

// Requiring our burger model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// Create all our routes and set up logic within those routes where required.
app.get('/', function(req, res) {
        db.Burgers.findAll({}).then(function(dbBurgers) {
            res.json(dbBurgers);
        });
    });

app.post('/', function(req, res) {
        db.Burgers.create(req.body).then(function(dbBurgers) {
            res.json(dbBurgers);
        });
    });

app.put('/:id', function(req, res) {
        db.Burgers.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbBurgers) {
            res.json(dbBurgers);
        });
    });
};

