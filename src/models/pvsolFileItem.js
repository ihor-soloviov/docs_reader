const { Schema, model } = require('mongoose');

const PvsolFileItemScheme = new Schema({
  title: { type: String, unique: false, required: true },
  price: { type: String, unique: false, required: true },
  measurement: { type: String, unique: false, required: true },
}, { strict: false });

const PvsolFileItem = model('PvsolFileItem', PvsolFileItemScheme);

module.exports = { PvsolFileItem, PvsolFileItemScheme };

