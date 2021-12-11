const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//connect to mongodb
mongoose.connect('mongodb+srv://psyched:3a5yk1ll@cluster0.ilslj.mongodb.net/user_management?retryWrites=true&w=majority');

//data schema
const userSchema = {
    name: String,
    class: String
};

//data model
const User = mongoose.model("User", userSchema);

//read route
app.get("/users", (request, response) => {
    User.find()
        .then((users) => response.json(users))
        .catch((err) => response.json(400).json("Error: " +err));
});

//create route
app.post('newUser', (request, response) => {
    const newUser = new User({
        name: request.body.name,
        class: request.body.class
    });
    newUser.save()
        .then(user => console.log(user))
        .catch(err => response(400).json('Error: ' + err));
});

//delete route

//update route

app.listen(port, function () {
    console.log("Express is running");
});
