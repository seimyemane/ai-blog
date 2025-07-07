const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema({
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
});
