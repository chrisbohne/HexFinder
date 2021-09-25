const mongoose = require('./');
const {Schema, model} = mongoose

const MapSchema = new Schema({
  name: {required: true, type: String},
  lastSaved: {type: Date, default: Date.now()},
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  code: {required: true, type: String}
})

const Map = model('Map', MapSchema);

module.exports = Map