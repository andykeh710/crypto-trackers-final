    const db = require("../models");
    const Coins = db.coin;  // Tutorial
    // const {OAuth2Client} = require('google-auth-library');
    // const { response } = require("express");
    // const client = new OAuth2Client('849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com')
    // Create and Save a new Tutorial


        exports.create = (req, res) => {
            console.log(req)
            // // Validate request
            // if (!req.body.title) {
            // console.log(req)
            // res.status(400).send({ message: "Content can not be empty! " });
            // return;
            // }
            // Create a Tutorial
            const coin = new Coins({
            name: req.body.name,
            // description: req.body.description,
            // published: req.body.published ? req.body.published : false
            });

            // Save Tutorial in the database
            coin
            .save(coin)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the coin."
                });
            });
        };

    // Retrieve all Tutorials from the database.
        exports.findAll = (req, res) => {
            const name = req.query.name;
            var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
        
            Coins.find(condition)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
                });
            });
        };

    // Find a single Tutorial with an id
    exports.findOne = (req, res) => {
            const id = req.params.id;
        
            Coins.findById(id)
            .then(data => {
                if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
                else res.send(data);
            })
            .catch(err => {
                res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
            });
        };

    // Update a Tutorial by the id in the request
    exports.update = (req, res) => {
        if (!req.body) {
            return res.status(400).send({
                message: "Data to update can not be empty!"
            });
            }
        
            const id = req.params.id;
        
            Coins.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                res.status(404).send({
                    message: `Cannot update Coins with id=${id}. Maybe Tutorial was not found!`
                });
                } else res.send({ message: "Coins was updated successfully." });
            })
            .catch(err => {
                res.status(500).send({
                message: "Error updating Tutorial with id=" + id
                });
            });
        };

    // Delete a Tutorial with the specified id in the request
        exports.delete = (req, res) => {
            const id = req.params.id;
        
            Coins.findByIdAndRemove(id)
            .then(data => {
                if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
                } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
                }
            })
            .catch(err => {
                res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
                });
            });
        };

        // Delete all Tutorials from the database.
        exports.deleteAll = (req, res) => {
            Coins.deleteMany({})
            .then(data => {
                res.send({
                message: `${data.deletedCount} Coins were deleted successfully!`
                });
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
                });
            });
        };

    // Find all published Tutorials
    exports.findAllPublished = (req, res) => {
        Coins.find({ published: true })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
                });
            });
    };

