const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
  title: { type: String, unique: false, required: true },
  price: { type: Number, unique: false, required: true },
}, { strict: false });

const Service = model('Service', ServiceSchema);

module.exports = { Service, ServiceSchema };

