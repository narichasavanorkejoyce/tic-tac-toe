'use strict'

const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.newGame(data)
    .done(gameUi.successNewGame)
    .fail(gameUi.fail)
}

const onSubmitMove = function (event) {
  event.preventDefault()
  // console.log('onSubmitMove worked!')
  const data = getFormFields(this)
  // console.log(this)
  // console.log(event.target)
  gameApi.submitMove(data)
    .done(gameUi.successMove)
    .fail(gameUi.fail)
}

const onGetIndex = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  gameApi.indexGame()
    .done(gameUi.successIndex)
    .fail(gameUi.fail)
}

const gameEventHandlers = () => {
  $('.new-game').on('submit', onNewGame)
  $('#game-info').on('submit', onSubmitMove)
  $('#game-statistics').on('submit', onGetIndex)
}

module.exports = {
  gameEventHandlers
}
