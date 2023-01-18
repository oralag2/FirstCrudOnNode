const Router = require('express');
const router = new Router();

const player = require('../controller/player');

router.post('/create', player.createPlayer);
router.get('/get', player.getPlayers);
router.post('/getOne', player.getPlayer);
router.delete('/delete', player.deletePlayer);
router.patch('/update', player.updatePlayer);
router.post('/findAndUpdate', player.findPlayerByNameandUpdate); 
module.exports = router;