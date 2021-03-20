// const e = require("express");

    module.exports = app => {
        const coins = require("../controllers/coins");
        
        var router = require("express").Router();
        
        // Create a new Tutorial
        router.post("/", coins.create);
    
        // Retrieve all Tutorials
        router.get("/", coins.findAll);
    
        // Retrieve all published Tutorials
        router.get("/published", coins.findAllPublished);
    
        // Retrieve a single Tutorial with id
        router.get("/:id", coins.findOne);
    
        // Update a Tutorial with id
        router.put("/:id", coins.update);
    
        // Delete a Tutorial with id
        router.delete("/:id", coins.delete);
    
        // Create a new Tutorial
        router.delete("/", coins.deleteAll);


        app.use('/api/coins', router);
    };