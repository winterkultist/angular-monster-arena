//
// This is an express server to use for this training application during local development
//
// !!! DO NOT CHANGE THIS WHILE LEARNING ANGULAR !!!
//

const http = require('http')

const express = require('express')
const app = express()
app.use(express.json())

const port = 3000
const server = http.createServer(app)

const monsters = [
  {
    name: 'Lavalak',
    img: 'double-dragon',
    element: 'FIRE',
    attacks: [
      {
        name: 'Fireball',
        element: 'FIRE',
        damage: 3,
        energyCost: 2
      },
      {
        name: 'Burn',
        element: 'FIRE',
        damage: 1,
        energyCost: 1
      },
    ],
    resistances: [
      'ICE'
    ],
    maxEnergy: 8,
    maxHealth: 10
  },
  {
    name: 'Slimolak',
    img: 'gooey-daemon',
    element: 'ACID',
    attacks: [
      {
        name: 'Splash',
        element: 'ACID',
        damage: 2,
        energyCost: 3
      }
    ],
    resistances: [],
    maxEnergy: 12,
    maxHealth: 8
  },
  {
    name: 'Tricelak',
    img: 'triceratops-head',
    element: 'ICE',
    attacks: [
      {
        name: 'Chill',
        element: 'ICE',
        damage: 1,
        energyCost: 1
      },
      {
        name: 'Blizzard',
        element: 'FIRE',
        damage: 5,
        energyCost: 6
      },
    ],
    resistances: [],
    maxEnergy: 7,
    maxHealth: 10
  },
  {
    name: 'Stingolak',
    img: 'wasp-sting',
    element: 'POISON',
    attacks: [
      {
        name: 'Bite',
        element: 'POISON',
        damage: 2,
        energyCost: 1
      },
      {
        name: 'Sting',
        element: 'POISON',
        damage: 6,
        energyCost: 3
      },
    ],
    resistances: [],
    maxEnergy: 3,
    maxHealth: 8
  }
]

app.get("/api/user", (req, res, next) => {
  res.json({username: 'Monster Trainer', role: 'TRAINER', validSince: '2021-12-30T12:00:00+01:00'})
})

app.get("/api/monster", (req, res, next) => {
  res.json(monsters)
})

app.post("/api/monster", (req, res, next) => {
  monsters.push(req.body)
  res.json(req.body)
})

server.listen(port, () => {
  console.log('Server started successfully')
})
