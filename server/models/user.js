const mongoose = require('./');
const {Schema, model} = mongoose

const UserSchema = new Schema({
  username: {required: true, type: String, unique: true},
  email: {required: true, type: String, unique: true},
  password: {required: true, type: String},
  maps: [{type: Schema.Types.ObjectId, ref: 'Map'}]
})

const User = model('User', UserSchema);

module.exports = User