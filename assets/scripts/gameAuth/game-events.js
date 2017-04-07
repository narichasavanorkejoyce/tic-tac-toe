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
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
}

const onSubmitMove = function (event) {
  event.preventDefault()
  console.log('onSubmitMove worked!')
  const data = getFormFields(this)
  console.log(this)
  console.log(event.target)
  gameApi.submitMove(data)
    .done(gameUi.successMove)
    .fail(gameUi.fail)
}

const onGetIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.indexGame(data)
    .done(gameUi.success)
    .fail(gameUi.fail)
}

const gameEventHandlers = () => {
  $('.new-game').on('submit', onNewGame)
  $('#game-info').on('submit', onSubmitMove)
}

module.exports = {
  gameEventHandlers,
  onGetIndex
}
