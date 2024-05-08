const categoriesRouter = require('express').Router()
const { findAllCategories, findCategoryById, updateCategory } = require('../middlewares/categories')
const { sendAllCategories, sendCategoryById, sendCategoryUpdated } = require('../controllers/categories')
const { createCategory } = require('../middlewares/categories')
const { sendCategoryCreated } = require('../controllers/categories')


categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)

categoriesRouter.post('/categories', findAllCategories, createCategory, sendCategoryCreated)

categoriesRouter.put('/categories/:id',
    findCategoryById,
    updateCategory,
    sendCategoryUpdated
)
module.exports = categoriesRouter
