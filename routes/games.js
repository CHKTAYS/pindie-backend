const gamesRouter = require('express').Router();
const { createGame, updateGame } = require('../middlewares/games')
const { sendGameCreated, sendGameUpdated } = require('../controllers/games')
const { findAllGames } = require('../middlewares/games');
const { sendAllGames } = require('../controllers/games');
const { findGameById } = require('../middlewares/games')
const { sendGameById } = require('../controllers/games')
gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post('/games', findAllGames, createGame, sendGameCreated)

gamesRouter.put('/games/:id', 
    findGameById,
    updateGame,
    sendGameUpdated
)
module.exports = gamesRouter;