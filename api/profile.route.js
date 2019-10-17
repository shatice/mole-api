/* eslint-disable handle-callback-err */
const express = require('express');
const profileRoutes = express.Router();

// Require Post model in our routes module
const Profile = require('./profile.model');


// Defined get data(index or listing) route
profileRoutes.route('/').get(function (req, res) {
  Profile.find(function (err, profiles) {
    if (err) {
      return res.json(err);
    } else {
      return res.json(profiles);
    }
  });
});

// create
profileRoutes.route('/create').post(function (req, res) {
  const profile = new Profile(req.body);
  profile.save()
    .then(() => {
      res.status(200).json({
        'business': 'business in added successfully'
      });
    })
    .catch(() => {
      res.status(400).send('unable to save to database');
    });
});


// getProfileByID
profileRoutes.route('/getProfile/:id').get(function (req, res) {
  const id = req.params.id;
  Profile.findById(id, function (err, profile) {
    if (err) {
      res.json(err);
    }
    res.json(profile);
  });
});

// update
profileRoutes.route('/update/:id').post(function (req, res) {
  Profile.findById(req.params.id, function (err, profile) {
    if (!profile)
      res.status(404).send('data is not found');
    else {
      profile.name = req.body.name;
      profile.cardImage = req.body.cardImage;
      profile.cardContent = req.body.cardContent;
      profile.cardSound = "no sound yet"
      profile.vimeoId = req.body.vimeoId;
      profile.Xpos = req.body.Xpos;
      profile.YPos = req.body.YPos;
      profile.intro = req.body.intro;
      profile.firstArticleTitle = req.body.firstArticleTitle;
      profile.firstArticleContent = req.body.firstArticleContent;
      profile.secondArticleTitle = req.body.secondArticleTitle;
      profile.secondArticleContent = req.body.secondArticleContent;
      profile.outside = req.body.outside;
      profile.save().then(() => {
          res.json('Update complete');
        })
        .catch(() => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// delete

profileRoutes.route('/delete/:id').delete(function (req, res) {
  Profile.findByIdAndRemove({
    _id: req.params.id
  }, function (err) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});


module.exports = profileRoutes;