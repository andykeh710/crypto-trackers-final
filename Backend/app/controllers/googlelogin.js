const userDb = require("../models")
const UserObj = userDb.user;
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com')
const db = require("../models");
const User = db.user;

exports.googlelogin = (req, res) => {
    console.log("RES`````````````````---------------------------", res)
    const {tokenId} = req.body;
    client.verifyIdToken({tokenId, audience: "849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com"})
    .then(res => {
        const {email_verified, name, email} = res.payload;
        console.log( res.payload)
    })
}

    exports.create = (req, res) => {
        console.log("ssssssssssssss-----------------------------------------------------------------AAAAAAAAAAAAAAAAAAAAAAAAAAAAARECCCCCCCCC-", req)
        // Create a Tutorial

        const user1 = new UserObj({
        name: req.body.name,
        id: req.body.id,
        email: req.body.email,
        coins: req.body.coins
        // published: req.body.published ? req.body.published : false
        });
        // Save Tutorial in the database
        user1
        .save(user1)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
    };


        exports.findAll = (req, res) => {
            User.find()
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
