//  users.js
//
//  Defines the users api. Add to a server by calling:
//  require('./users')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

  app.get('/users', (req, res, next) => {
    options.repository.getUsers().then((users) => {
      res.status(200).send(users.map((user) => {
        return {
          username: user.username,
          phoneNumber: user.phone_number
        };
      }));
    })
      .catch(next);
  });

  app.get('/search', (req, res, next) => {

    //  Get the username.
    var username = req.query.username;
    if (!username) {
      throw new Error("When searching for a user, the email must be specified, e.g: '/search?email=homer@thesimpsons.com'.");
    }

    //  Get the user from the repo.
    var pic = "";

    var makeReaponse = function () {
      if (!user) {
        res.status(404).send('User not found.');
      } else {
        res.status(200).send({
          username: user.username,
          phoneNumber: user.phone_number,
          picture_profile: pic
        });
      };
    }
    options.repository.getPhoneNoByUsername(username)

      .then((user) => {
        if (!user) {
          res.status(404).send('User not found.');
        } else {
          function httpGet(theUrl) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false); // false for synchronous request
            xmlHttp.send(null);
            return xmlHttp.responseText;
          }
          console.log(username);
          pic = httpGet('http://localhost:3000/api/user/' + username);
          console.log(pic);
          res.status(200).send({
            username: user.username,
            phoneNumber: user.phone_number,
            picture_profile: pic.substring(18,pic.length-2)
          });

        }
      })
      .catch(next);

  });
};
