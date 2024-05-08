const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const { cors }  = require('./middlewares/cors')
const connectToDatabase = require('./database/connect')
const { usersRouter } = require('./routes/users')
const gamesRouter = require('./routes/games')
const categoriesRouter = require('./routes/categories')
const PORT = 3000
connectToDatabase()
app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    usersRouter,
    gamesRouter,
    categoriesRouter
)

app.listen(PORT, () => {
    console.log(`Запущен на http://localhost:${PORT}`)
})