const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
  producer: { type: String, unique: false, required: true },
  title: { type: String, unique: false, required: true },
  price: { type: Number, unique: false, required: true },
  section: { type: String, unique: false, required: true },
}, { strict: false });

const Service = model('Service', ServiceSchema);

module.exports = { Service, ServiceSchema };

