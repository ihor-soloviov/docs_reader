const { Schema, model } = require('mongoose');

const Service = new Schema({
  producer: { type: String, unique: false, required: true },
  title: { type: String, unique: false, required: true },
  price: { type: Number, unique: false, requires: true },
}, { strict: false })

const Angebot = new Schema({
  angebotId: { type: Number, unique: true, required: true },
  angebot_type: { type: String, unique: false, required: true },
  montage: { type: [Service], unique: false, required: false },
  under_constructions: { type: [Service], unique: false, required: false },
  pvModule: { type: [Service], unique: false, required: false },
  pvsol_file: { type: [Service], unique: false, required: false },
  invertor: { type: [Service], unique: false, required: false },
  iq_combiner: { type: [Service], unique: false, required: false },
  optimizer: { type: [Service], unique: false, required: false },
  battery: { type: [Service], unique: false, required: false },
  wallbox: { type: [Service], unique: false, required: false },
  backup_box: { type: [Service], unique: false, required: false },
  taubenschutz: { type: [Service], unique: false, required: false },
  zusatzarbeiten: { type: [Service], unique: false, required: false },
})

module.exports = model('Angebot', Angebot)