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

//Récupérer la recette du jour
app.get('/api/recipe-of-the-day', async (req, res) => {
  const result = await prisma.recipes.findFirst({
    where: {ofTheDay: true}
  })
  res.send(result)
})

//Récupérér toutes les recettes
app.get('/api/recipes', async (req, res) => {
  const result = await prisma.recipes.findMany()
  res.send(result)
})

//Récupérér une recette par son id
app.get('/api/recipes/:id', async (req, res) => {
  const result = await prisma.recipes.findUnique({
    where: {id: parseInt(req.params.id)}
  })
  res.send(result)
})

//Récupérér tous les ingrédients
app.get('/api/ingredients', async (req, res) => {
  const result = await prisma.ingredients.findMany()
  res.send(result)
})

//Récupérér un ingrédient par son id
app.get('/api/ingredients/:id', async (req, res) => {
  const result = await prisma.ingredients.findUnique({
    where: {id: parseInt(req.params.id)}
  })
  res.send(result)
})

//Récupérér toutes les entrées
app.get('/api/starters', async (req, res) => {
  const result = await prisma.recipes.findMany({
    where: {type: 'entree'}
  })
  res.send(result)
})

//Récupérér tous les plats
app.get('/api/dishes', async (req, res) => {
  const result = await prisma.recipes.findMany({
    where: {type: 'plat'}
  })
  res.send(result)
})

//Récupérér tous les desserts
app.get('/api/desserts', async (req, res) => {
  const result = await prisma.recipes.findMany({
    where: {type: 'dessert'}
  })
  res.send(result)
})

//Récupérér toutes les boissons
app.get('/api/drinks', async (req, res) => {
  const result = await prisma.recipes.findMany({
    where: {type: 'boisson'}
  })
  res.send(result)
})


prisma.$connect

app.listen(port, () => console.log(`Application : http://localhost:${port}`))