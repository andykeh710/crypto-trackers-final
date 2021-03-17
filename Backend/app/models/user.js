module.exports = mongoose => { // model we use to store data 
    const User = mongoose.model(
    "tutorial",
    mongoose.Schema(
        {
        title: String,
        description: String,
        published: Boolean,
        coins: [[]]
        },
        { timestamps: true }
    )
    );

    return User;
};
