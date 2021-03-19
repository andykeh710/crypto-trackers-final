// const e = require("express");

module.exports = app => {
    var router = require("express").Router();
    const googlelogin = require("../controllers/googlelogin");

    console.log("-----------------------------------")
    router.post('/', googlelogin.create) // this is auth route 

    router.get('/', googlelogin.findAll)

    app.use('/api/googlelogin', router);
};