'use strict'
const store = require('../store.js')

const successNewGame = (data) => {
  console.log('successNewGame worked!')
  store.game = data.game
  console.log(store)
}

const successMove = (data) => {
  console.log('successMove worked!')
  console.log(data)
  // store.game = data.game
}

const successIndex = (data) => {
  console.log('successIndex worked!')
  // store.game = data.game
  // console.log(store)
  console.log(data)
  console.log(data.games.length)
  $('#num-games-completed').val(data.games.length)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  successIndex,
  successNewGame,
  successMove
}
