const db = require("../models");
// console.log(db);
// db ???
module.exports = function(app, passport) {
  app.get("/_api/non-cached", (req, res) => {
    res.json({ random: Math.random() });
  });
  app.get("/api/cached", (req, res) => {
    res.json({ random: Math.random() });
  });

  app.get(
    "/_auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/_auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect(process.env.GOOGLE_CALLBACK_REDIRECT);
    }
  );

  app.post("/_api/user", (req, res) => {
    //try to find user
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(function(user) {
        if (!user) {
          // if we don't have user, create
          console.log("Will create user soon");
          db.User.create(req.body)
            .then(dbUser => {
              console.log(dbUser);
              res.json(dbUser);
            })
            .catch(error => {
              console.log(error);
              res.json({
                message: "Make sure that this noise does not drive me nuts!"
              });
            });
        } else {
          // otherwise, we have the user
          res.json({ message: "We already have this user" });
        }
      })
      .catch(error => {
        console.log(error);
        res.json({ message: "I am so glad the noise stopped" });
      });
  });

  app.post(
    "/_api/user/login",
    passport.authenticate("local" /*, { failureRedirect: '/login' }*/),
    function(req, res) {
      // req.user comes from passport
      if (req.user) {
        let temp = {};
        // a secure way to filter your object properties
        // only expose what you need to expose
        temp.email = req.user.email;
        temp.name = req.user.name;
        res.json(temp);
      } else {
        res.json(false);
      }
    }
  );

  app.get("/_api/user", (req, res) => {
    // req.user comes from passport
    if (req.user) {
      let temp = {};
      // a secure way to filter your object properties
      // only expose what you need to expose
      temp.email = req.user.email;
      temp.name = req.user.name;
      res.json(temp);
    } else {
      res.json(false);
    }
  });

  app.get("/_api/user/logout", function(req, res) {
    req.logout();
    res.json(true);
  });
};
