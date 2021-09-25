const Map = require('../models/map')
const User = require('../models/user')

exports.createMap = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.userName});
    console.log(user)
    if (user) {
      const body = req.body;
      const map = new Map(body);
      await map.save();
      res.status(202).json('Map Saved')
    }
    else res.json('User not found')
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}

exports.updateMap = async (req, res) => {

}

exports.deleteMap = async (req, res) => {

}
