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
        url: 'file:./bd_mm7.db'
      }
    },
    log: ['info', 'query', 'warn', 'error']
  }
);

app.get('/', (req, res) => res.send('Hello, World!'))

app.get('/api/recipes', async (req, res) => {
  const result = await prisma.recipes.findMany()
  res.send(result)
})

app.get('/api/recipes/:id', async (req, res) => {
  const result = await prisma.recipes.findUnique({
    where: {id: parseInt(req.params.id)}
  })
  res.send(result)
})

app.get('/api/recipe-of-the-day', async (req, res) => {
  const result = await prisma.recipes.findFirst({
    where: {ofTheDay: true}
  })
  res.send(result)
})

prisma.$connect



//app.get('/api/recipes/:id', (req, res) => {
//    const id = parseInt(req.params.id)
//    const recipe = recipes.find(recipe => recipe.id === id)
//    res.send(recipe)
//})

app.listen(port, () => console.log(`Application : http://localhost:${port}`))