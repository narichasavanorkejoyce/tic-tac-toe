'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')
const gameEvents = require('./gameAuth/game-events.js')
const gameLogic = require('./gameLogic')

// On document ready

// Bring in login events
$(() => {
  authEvents.addHandlers()
})

// Set the API
$(() => {
  setAPIOrigin(location, config)
})

// Bring in game logic functions
$(() => {
  gameLogic.gameLogicHandlers()
})

// Bring in game events
$(() => {
  gameEvents.gameEventHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
