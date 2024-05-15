const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const { cors }  = require('./middlewares/cors')
const connectToDatabase = require('./database/connect')
const apiRouter = require('./routes/apiRouter')
const PORT = 3000
connectToDatabase()
app.use(
    cors,
    bodyParser.json(),
    apiRouter,
    express.static(path.join(__dirname, 'public')),
)

app.listen(PORT, () => {
    console.log(`Запущен на http://localhost:${PORT}`)
})