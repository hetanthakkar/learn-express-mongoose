var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: { type: String, requried: true, maxLength: 100 },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  summary: { type: String, requireD: true, maxLength: 500 },
  ISBN: { type: String, maxLength: 10 },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

//Export model
module.exports = mongoose.model("Book", BookSchema);
