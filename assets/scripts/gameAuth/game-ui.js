'use strict'
const store = require('../store.js')

const success = (data) => {
  console.log(data)
}

const successNewGame = (data) => {
  console.log('successNewGame worked!')
  store.game = data.game
  console.log(store)
}

const successMove = (data) => {
  console.log('successMove worked!')
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  successNewGame,
  successMove
}
