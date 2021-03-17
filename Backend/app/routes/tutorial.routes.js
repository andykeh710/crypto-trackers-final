const e = require("express");

    
    
    module.exports = app => {
        const tutorials = require("../controllers/tutorial.controller.js");
        const googlelogin = require("../controllers/googlelogin.js");
        
        var router = require("express").Router();
        


        
        // Create a new Tutorial
        router.post("/", tutorials.create);

        router.post('googlelogin', function(req, res){
            googlelogin
        })
    
        // Retrieve all Tutorials
        router.get("/", tutorials.findAll);
    
        // Retrieve all published Tutorials
        router.get("/published", tutorials.findAllPublished);
    
        // Retrieve a single Tutorial with id
        router.get("/:id", tutorials.findOne);
    
        // Update a Tutorial with id
        router.put("/:id", tutorials.update);
    
        // Delete a Tutorial with id
        router.delete("/:id", tutorials.delete);
    
        // Create a new Tutorial
        router.delete("/", tutorials.deleteAll);

    
        app.use('/api/tutorials', router);
    };