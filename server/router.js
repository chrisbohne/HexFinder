const router = require('express').Router()
const user = require('./controllers/user')
const map = require('./controllers/map')

router.post('/register', user.createUser);
router.post('/login', user.loginUser);
router.get('/user/:userName', user.getUser);
router.get('user/:userName/maps', user.getUserMaps);
router.get('user/:userName/map/:mapId', user.getUserMap);

router.post('/user/:userName/map/new', map.createMap);
router.put('/map/:mapId', map.updateMap);
router.delete('/map/:mapId', map.deleteMap);


module.exports = router;