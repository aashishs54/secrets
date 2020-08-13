const UserData = require("../Models/UserData")

//let errors = []

exports.homePage = function(req, res) {
    res.render("home");
}

exports.register = function(req, res) {
    res.render("register");
}

exports.login = function(req, res) {
    //console.log(req.flash("errors"));
   // res.render("login",  {errors: req.flash("errors")});
   res.render("login")
}

exports.registerUser = function(req, res) {
   let user = new UserData(req.body)
   user.register()
   if(user.errors.length){
       user.errors.forEach(function(error){
           console.log(error);
       }) 
   } else {
       res.render("secrets")
   }
}

exports.loginUser = function(req, res){
    let user = new UserData(req.body)
    user.loginUser().then(()=>{
        res.render("secrets")
    }).catch(()=> {
        //console.log(user.errors);
        if(user.errors.length){
            user.errors.forEach(function(error){
               //req.flash(errors, error)
                console.log(error);
            }) 
        }
        res.redirect("/login")
    })
}





