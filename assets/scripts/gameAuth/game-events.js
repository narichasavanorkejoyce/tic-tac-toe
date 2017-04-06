'use strict'

const gameApi = require('./game-api')
const gameUi = require('./game-ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetIndex = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.indexGame(data)
    .done(gameUi.success)
    .fail(gameUi.fail)
}

const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  gameApi.newGame(data)
    .done(gameUi.success)
    .fail(gameUi.fail)
}

// const onSubmitMove

// const onSignUp = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signUp(data)
//   .done(ui.success)
//   .fail(ui.fail)
// }
//
// const onSignIn = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signIn(data)
//   .done(ui.signInSuccess)
//   .fail(ui.fail)
// }
//
// const onSignOut = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signOut(data)
//   .done(ui.signOutSuccess)
//   .fail(ui.fail)
// }
//
// const onChangePassword = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.changePassword(data)
//   .done(ui.changePasswordSuccess)
//   .fail(ui.fail)
// }

const gameEventHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#sign-out').on('submit', onSignOut)
  // $('#change-password').on('submit', onChangePassword)
  $('.new-game').on('submit', onNewGame)
}

module.exports = {
  gameEventHandlers,
  onGetIndex
}
