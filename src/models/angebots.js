const { Schema, model } = require('mongoose');
const { ServiceSchema } = require('./services');
const { PvsolFileItemScheme } = require('./pvsolFileItem')

const AngebotSchema = new Schema({
  angebotId: { type: Number, unique: true, required: true },
  angebotType: { type: String, unique: false, required: true },
  montage: { type: [ServiceSchema], unique: false, required: false },
  underConstructions: { type: [ServiceSchema], unique: false, required: false },
  pvModule: { type: [PvsolFileItemScheme], unique: false, required: false },
  pvsolFileData: { type: [ServiceSchema], unique: false, required: false },
  invertor: { type: [ServiceSchema], unique: false, required: false },
  iqCombiner: { type: [ServiceSchema], unique: false, required: false },
  optimizer: { type: [ServiceSchema], unique: false, required: false },
  battery: { type: [ServiceSchema], unique: false, required: false },
  wallbox: { type: [ServiceSchema], unique: false, required: false },
  backupBox: { type: [ServiceSchema], unique: false, required: false },
  taubenschutz: { type: [ServiceSchema], unique: false, required: false },
  zusatzarbeiten: { type: [ServiceSchema], unique: false, required: false },
});

const Angebot = model('Angebot', AngebotSchema);

module.exports = Angebot;