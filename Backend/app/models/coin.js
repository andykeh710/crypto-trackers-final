    module.exports = mongoose => { // model we use to store data 
        const Coin = mongoose.model(
        "coin",
        mongoose.Schema(
            {
            name: String,
            // description: String,
            // published: Boolean
            },
            { timestamps: true }
        )
        );
    
        return Coin;
    };

    // module.exports = mongoose => {  // in case we need to have id instead of _id 
    //     var schema = mongoose.Schema(
    //       {
    //         title: String,
    //         description: String,
    //         published: Boolean
    //       },
    //       { timestamps: true }
    //     );

    //     schema.method("toJSON", function() {
    //       const { __v, _id, ...object } = this.toObject();
    //       object.id = _id;
    //       return object;
    //     });

    //     const Tutorial = mongoose.model("tutorial", schema);
    //     return Tutorial;
    //   };