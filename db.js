const mongoose = require("mongoose")
const app = require("./app")

const url = "mongodb://localhost:27017/secretsDB"


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true}, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("connected to DB");
        app.listen(3500)
    }
})



//module.exports = User
