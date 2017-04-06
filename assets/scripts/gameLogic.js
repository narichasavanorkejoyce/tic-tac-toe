const checkWin = function (slotValue) {
  if ($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#0').html() === $('#2').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#0').html() === $('#6').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#0').html() === $('#8').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#2').html() === $('#6').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#1').html() === $('#7').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#2').html() === $('#8').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#6').html() === $('#8').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else if ($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#3').html() === $('#5').html()) {
    // location.reload()
    $('#game-outcome').val('true')
    return console.log('You found a match!')
  } else {
    // Populate the outcome input
    $('#game-outcome').val('false')
  }
}

const checkDraw = function () {
  if ($('.slot').html() !== '') {
    return console.log('There is a draw!')
  }
}

const clearBoard = function () {
  location.reload()
}

let numMoves = 0
const gameArray = []

const gameBoard = function (event) {
  // If we're on an even number of moves, place down 'X'
  if ($(this).html() === '' && numMoves % 2 === 0 && numMoves < 9) {
    // Fill in slot with 'X' - UI
    $(this).html('X')
    // Store the move in an array
    gameArray[+$(this).attr('id')] = 'X'
    console.log(gameArray)
    // Populate the game form with data about the move.
    // This will be sent up to the back end through a PATCH AJAX request
    // Populate the index input
    $('#game-array-index').val(+$(this).attr('id'))
    // Populate the marker input
    $('#move-marker').val('X')
    // Add 1 to the numMoves counter
    numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWin('X')
    // If we're on an odd number of moves, place down 'O'
  } else if ($(this).html() === '' && numMoves % 2 !== 0 && numMoves < 9) {
    // Fill in slot with 'O'
    $(this).html('O')
    // Store the move in an array
    gameArray[+$(this).attr('id')] = 'O'
    console.log(gameArray)
    // Populate the game form with data about the move.
    // This will be sent up to the back end through a PATCH AJAX request
    // Populate the index input
    $('#game-array-index').val(+$(this).attr('id'))
    // Populate the marker input
    $('#move-marker').val('O')
    // Add 1 to the numMoves counter
    numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWin('O')
    // Check whether it's a cat's game
  } else if (numMoves === 8) {
    checkDraw()
  } else if ($(this).html() !== '') {
    console.log('Please pick another slot')
  }
  console.log(numMoves)
  $('#game-info').submit()
}

const gameLogicHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  $('.slot').on('click', gameBoard)
  $('#play-again').on('submit', clearBoard)
}

module.exports = {
  gameLogicHandlers
}
