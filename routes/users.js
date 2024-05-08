const usersRouter = require('express').Router()
const { findAllUsers, findUserById } = require('../middlewares/users')
const { createUser } = require('../middlewares/users')
const { sendUserCreated, sendUserById } = require('../controllers/users')
const { sendAllUsers } = require('../controllers/users')

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.get('/user/:id', findUserById, sendUserById)
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated)
module.exports = { usersRouter }