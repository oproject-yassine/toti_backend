const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const cliente = require('./models/cliente')

const sequelize = new Sequelize({ 
  dialect: 'sqlite', 
  storage: './dados.db' 
})  

const clientes = cliente(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List clientes
app.get('/clientes', (req, res) => { 
  res.json({ action: 'Listing clientes' })
})

// Create cliente
app.post('/clientes', (req, res) => {
  const body = req.body

  res.json(body)
})

// Show cliente
app.get('/clientes/:id', (req, res) => {
  const clienteId = req.params.id

  res.send({ action: 'Showing cliente', clienteId: clienteId })
})

// Update cliente
app.put('/clientes/:id', (req, res) => {
  const clienteId = req.params.id

  res.send({ action: 'Updating cliente', clienteId: clienteId })
})

// Delete cliente
app.delete('/clientes/:id', (req, res) => {
  const clienteId = req.params.id

  res.send({ action: 'Deleting cliente', clienteId: clienteId })
})

app.listen(8080, () => {
  console.log('Iniciando o ExpressJS na porta 8080')
})
