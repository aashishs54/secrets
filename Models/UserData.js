const mongoose = require("mongoose")
const encrypt = require("mongoose-encryption")
const dotenv = require("dotenv")
dotenv.config()


const userSchema = mongoose.Schema({
    email: String,
    password: String
})

//set up encryption

userSchema.plugin(encrypt, { secret: process.env.SECRET ,encryptedFields: ["password"]});

const User = mongoose.model("user", userSchema)

let UserData = function (data) {
    this.data = data
    this.errors = []
}

UserData.prototype.register = function () {
    let email = this.data.username;
    email = email.toLowerCase()
    console.log(this.data.password);
    let user = new User({
        email: email,
        password: this.data.password
    })
    user.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Document added successfully");
        }
    })
}

UserData.prototype.loginUser = function () {
    return new Promise((resolve, reject) => {
        let email = this.data.username.toLowerCase()
        let password = this.data.password
        console.log(email);
        console.log(password);

        User.findOne({ email: email}, (err, results) => {
            if (results != null) {
                if(results.password == password){
                    console.log("User Found");
                    resolve()
                } else {
                    this.errors.push("User not found");
                    reject()
                }  
            } else {
                this.errors.push("User not found");
                reject()
            }
        })

    })
}


module.exports = UserData