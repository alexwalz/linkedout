const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.classified
            .find({})
            .then(function (dbModel) {
                res.json(dbModel);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    findById: function (req, res) {
        db.classified
            .findById(req.params.id)
            .populate('comments')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        //console.log(".... req object...");
        //console.log(req.body);
        db.classified
            .create(req.body)
            .then(dbModel => {
                //console.log(".... in then");
                //console.log(dbModel);
                res.json(dbModel);
            })
            .catch(err => {
                //console.log(".... in error");
                //console.log(err);
                res.status(422).json(err);

            });
    },
    update: function (req, res) {
        db.classified
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.classified
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};