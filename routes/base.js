'use strict';

const express = require('express');
const router = express.Router();
const routeGuard = require('../middleware/route-guard');
const Publication = require('./../models/publication');

router.get('/', (req, res, next) => {
  Publication.find()
    .sort({ createdAt: -1 })
    // telling mongoose to populate the creator property
    // tells it to fetch docs from the users collection
    // sinse the ref property for creator refers to user model in the publication schema
    // and it replaces the values of the publication creator properties
    // by the respective user docs
    .populate('creator')
    .then((publications) => {
      res.render('home', { publications });
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.render('private');
});

module.exports = router;
