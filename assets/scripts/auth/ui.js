'use strict'
const store = require('../store.js')

const successSignUp = (data) => {
  // console.log(data)
  $('#sign-up-response').text('Awesome! Now, please sign in.')
}

const failureSignUp = () => {
  // console.error(error)
  $('#sign-up-response').text('User already exists. Please sign in.')
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log(store)
  $('#sign-in-response').text('Success! Click "Start!" to play the game.')
}

const signInFail = () => {
  // console.error(error)
  $('#sign-in-response').text('Wrong password. Please try again.')
}

const signOutSuccess = () => {
  store.user = null
  // console.log(store)
}

const changePasswordSuccess = () => {
  $('#change-pwd-inst').text('Password successfully changed!')
  // console.log('Password Successfully Changed.')
}

const changePasswordFail = () => {
  // console.error(error)
  $('#change-pwd-inst').text('Wrong original password. Please try again.')
}

const failure = () => {
  // console.error(error)
}

module.exports = {
  failure,
  signInSuccess,
  signInFail,
  signOutSuccess,
  changePasswordSuccess,
  changePasswordFail,
  failureSignUp,
  successSignUp
}
