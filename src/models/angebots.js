const { Schema, model } = require('mongoose');
const { ServiceSchema } = require('./services'); // Імпорт схеми, а не моделі

const AngebotSchema = new Schema({
  angebotId: { type: Number, unique: true, required: true },
  angebot_type: { type: String, unique: false, required: true },
  montage: { type: [ServiceSchema], unique: false, required: false },
  under_constructions: { type: [ServiceSchema], unique: false, required: false },
  pvModule: { type: [ServiceSchema], unique: false, required: false },
  pvsol_file: { type: [ServiceSchema], unique: false, required: false },
  invertor: { type: [ServiceSchema], unique: false, required: false },
  iq_combiner: { type: [ServiceSchema], unique: false, required: false },
  optimizer: { type: [ServiceSchema], unique: false, required: false },
  battery: { type: [ServiceSchema], unique: false, required: false },
  wallbox: { type: [ServiceSchema], unique: false, required: false },
  backup_box: { type: [ServiceSchema], unique: false, required: false },
  taubenschutz: { type: [ServiceSchema], unique: false, required: false },
  zusatzarbeiten: { type: [ServiceSchema], unique: false, required: false },
});

const Angebot = model('Angebot', AngebotSchema);

module.exports = Angebot;