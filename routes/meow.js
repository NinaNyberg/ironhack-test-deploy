/* eslint-disable prettier/prettier */
const express = require('express');
const res = require('express/lib/response');
const Publication = require('./../models/publication');
const meowRouter = new express.Router();
const routeGuard = require('./../middleware/route-guard.js');
const fileUpload = require('./../middleware/file-upload');

meowRouter.get('/create', routeGuard, (req, res) => {
  res.render('meow-create');
});

meowRouter.post(
  '/create',
  routeGuard,
  fileUpload.single('picture'),
  (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    const { message } = req.body;
    let picture;
    if (req.file) {
      picture = req.file.path;
    }
    // create method on publication model
    Publication.create({ message, picture, creator: req.user._id })
      .then(() => {
        res.redirect('/');
      })
      .catch((error) => {
        next(error);
      });
  }
);

meowRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Publication.findById(id)
    .populate('creator')
    .then((publication) => {
      res.render('meow-single', { publication });
    })
    .catch((error) => {
      next(error);
    });
});

meowRouter.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Publication.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = meowRouter;
