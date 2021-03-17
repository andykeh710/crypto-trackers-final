const db = require("../models");
const Tutorial = db.tutorials;
const {OAuth2Client} = require('google-auth-library');
const { response } = require("express");
const client = new OAuth2Client('849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com')


exports.googlelogin = (req, res) => {
    const {tokenId} = req.body;
    client.verifyIdToken({tokenId, audience: "849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com"}).then(res => {
        const {email_verified, name, email} = res.payload;
        console.log( res.payload)
    })
    console.log()
}