const express = require('express')
const path = require('path')
const cors = require('cors')
const application = require('./src/app/routes/index')

require('dotenv').config()
const port = process.env.PORT

const app = express()

app.set('views', path.join(__dirname, 'src/app/views/'))
app.use(express.static(path.join(__dirname, 'src/app/public/')));
app.set('view engine', 'ejs')

// untuk mengizinkan hanya method get yang di izinkan
const corsOptions = {
    origin : '*',
    methods : ['GET'],
    allowHeader : ['Content-Type']
}

app.use(cors(corsOptions))

app.use('/', application)

app.listen(port, () => {
    console.log(`app listen on : http://localhost:${port}`)
})