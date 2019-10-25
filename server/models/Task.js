const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Task = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
    },
    creation_date: {
      type: Date,
      default: Date.now(),
    },
    conclusion_date: {
      type: Date,
    },
    remenber_me_date: {
      type: Date,
    },
  }
);

module.exports = mongoose.model('Task', Task);