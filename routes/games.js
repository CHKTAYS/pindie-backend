const gamesRouter = require('express').Router();
const createGame = require('../middlewares/games')
const sendGameCreated = require('../controllers/games')
const findAllGames = require('../middlewares/games');
const sendAllGames = require('../controllers/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRoutes.post('/games', findAllGames, createGame, sendGameCreated)
module.exports = gamesRouter;