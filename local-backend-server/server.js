//
// This is an express server to use for this training application during local development
//
// !!! DO NOT CHANGE THIS WHILE LEARNING ANGULAR !!!
//

const http = require('http')

const express = require('express')
const app = express()

const port = 3000
const server = http.createServer(app)

const monsters = [{
  name: 'Lavamonster',
  element: 'FIRE',
  attacks: [
    {
      name: 'Fireball',
      element: 'FIRE',
      damage: 4,
      energyCost: 2
    }
  ],
  resistances: [
    'ICE'
  ],
  maxEnergy: 12,
  maxHealth: 10
}]

app.get("/api", (req, res, next) => {
  res.json({status: 'success', data: [], message: 'It works!'})
})

app.get("/api/monster", (req, res, next) => {
  res.json({username: 'Lakmon Trainer', role: 'USER', validSince: '2021-12-30T12:00:00+01:00'})
})

server.listen(port, () => {
  console.log('Server started successfully')
})
