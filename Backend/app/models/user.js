module.exports = mongoose => { // model we use to store data 
    const User = mongoose.model(
    "user",
    mongoose.Schema(
        {
        name: String,
        id: String,
        email: String,
        coins: [{ type: String }]
        },
        { timestamps: true }
    )
    );
    return User;
};
