module.exports = mongoose => { // model we use to store data 
    const User = mongoose.model(
    "user",
    mongoose.Schema(
        {
        name: String,
        id: String,
        email: String
        // coins: [[]]
        },
        { timestamps: true }
    )
    );
    return User;
};
