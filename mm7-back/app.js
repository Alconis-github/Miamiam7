const express = require('express')

const app = express()
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const port = 3333

const { PrismaClient } = require ('@prisma/client')

const prisma = new PrismaClient({
    datasources: {
      db: {
        url: 'bd_mm7.db'
      }
    },
    log: ['info', 'query', 'warn', 'error']
  }
);

app.get('/', (req, res) => res.send('Hello, World!'))

prisma.$connect

app.get('/api/recipes', async (req, res) => {
    const result = await prisma.recipes.findUnique({
      where: {
        id: 1,
      },
    })
})

//app.get('/api/recipes/:id', (req, res) => {
//    const id = parseInt(req.params.id)
//    const recipe = recipes.find(recipe => recipe.id === id)
//    res.send(recipe)
//})

app.listen(port, () => console.log(`Application : http://localhost:${port}`))