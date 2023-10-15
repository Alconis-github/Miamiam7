const express = require('express')

const app = express()
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const port = 3333

app.get('/', (req, res) => res.send('Hello, World!'))

app.listen(port, () => console.log(`Application : http://localhost:${port}`))