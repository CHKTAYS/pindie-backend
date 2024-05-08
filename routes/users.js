const usersRouter = require('express').Router()
const { findAllUsers, findUserById, updateUser } = require('../middlewares/users')
const { createUser } = require('../middlewares/users')
const { sendUserCreated, sendUserById, sendUserUpdated } = require('../controllers/users')
const { sendAllUsers } = require('../controllers/users')

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.get('/users/:id', findUserById, sendUserById)

usersRouter.post('/users', findAllUsers, createUser, sendUserCreated)

usersRouter.put('/users/:id', 
    findUserById,
    updateUser,
    sendUserUpdated
)
module.exports = { usersRouter }