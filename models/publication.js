/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      maxlength: 300,
      trim: true // ensures that any spaces at the beginning or ending of string are removed
    },
    picture: {
      type: String
    },
    creator: {
      // tell mongoose an objid of another doc will be stored in this property
      type: mongoose.Types.ObjectId,
      required: true,
      // tell mongoose that this refers to the id of a doc in the users collection
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;
