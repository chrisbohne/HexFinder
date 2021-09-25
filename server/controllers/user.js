const User = require('../models/user')
const Map = require('../models/map')

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(202).json('User Created')
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.userName}).populate({path: 'maps', model: 'map'}).exec((error, founduser) => founduser)
    res.status(202).json(user)
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({email: email})
    if (user && user.password === password) {
      res.json('Logged In')
      return
    }
    res.json('Wrong Password or Email')
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.getUserMaps = async (req, res) => {

}

exports.getUserMap = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.userName})
    const mapId = req.params.mapId;
    res.status(202).json()
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}