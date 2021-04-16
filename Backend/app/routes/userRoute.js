// const e = require("express");

module.exports = app => {
    var router = require("express").Router();
    const googlelogin = require("../controllers/googlelogin");

    console.log("-----------------------------------")

    router.post('/', googlelogin.create) // this is auth route 

    router.put("/:id", googlelogin.update);

    // Retrieve a single Tutorial with id
    router.get("/:id", googlelogin.findOne);

    router.get('/', googlelogin.findAll)

    router.delete("/:id", googlelogin.delete);

    app.use('/api/googlelogin', router);
};