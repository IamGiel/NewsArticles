var mongoose = require("mongoose");

// Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  // Title of Article
  title: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm A')
  },

  // Link to Article
  link: {
    type: String,
    required: true
  },
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
