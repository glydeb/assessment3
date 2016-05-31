var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  photoURL: String,
  description: String,
  animalType: String,
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
