'use strict'
const store = require('../store.js')

const signInSuccess = (data) => {
  store.user = data.user
  console.log(store)
  $('#sign-in-response').text('Success! Click "Start!" to play the game.')
}

const signOutSuccess = () => {
  store.user = null
  console.log(store)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const successSignUp = (data) => {
  console.log(data)
  $('#sign-up-response').text('Awesome! Now, please sign in.')
}

const failureSignUp = (error) => {
  console.error(error)
  $('#sign-up-response').text('User already exists. Please sign in.')
}

const signInFail = (error) => {
  console.error(error)
  $('#sign-in-response').text('Wrong password. Please try again.')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  signInSuccess,
  signInFail,
  signOutSuccess,
  changePasswordSuccess,
  failureSignUp,
  successSignUp
}
