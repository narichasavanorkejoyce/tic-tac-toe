// let numMoves = 0
let gameArray = []

const resetBoard = function () {
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
  $('#game-array-index').val('index')
  $('#move-marker').val('marker')
  $('#game-over').val('over')
  gameArray = new Array()
  console.log(gameArray)
}

const gameBoard = function (event) {
  const lengthArray = gameArray.filter((e) => e !== undefined).length
  console.log('the array length is ' + lengthArray)
  // If we're on an even number of moves, place down 'X'
  if ($(this).html() === '' && lengthArray % 2 === 0) {
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
    // numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWin('X')
    checkDraw(lengthArray)
    // Remove the undefined elements in an array
    // cleanArray(gameArray)
    // console.log('cleanArray is ' + cleanArray())
    // If we're on an odd number of moves, place down 'O'
  } else if ($(this).html() === '' && lengthArray % 2 !== 0) {
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
    // numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWin('O')
    checkDraw(lengthArray)
    // Remove the undefined elements in an array
    // cleanArray(gameArray)
    // console.log(cleanArray)
    // Check whether it's a cat's game
  // } else if (numMoves === 8) {
  //   checkDraw()
  } else if ($(this).html() !== '') {
    console.log('Please pick another slot')
  }
  // console.log(numMoves)
  $('#game-info').submit()
}

const checkWin = function (slotValue) {
  // Check whether there is a winning combination
  if ($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#0').html() === $('#2').html()) {
    // Populate the outcome input
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#0').html() === $('#6').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#0').html() === $('#8').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#2').html() === $('#6').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#1').html() === $('#7').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#2').html() === $('#8').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#6').html() === $('#8').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else if ($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#3').html() === $('#5').html()) {
    $('#game-over').val('true')
    return console.log('You found a match!')
  } else {
    // Populate the outcome input
    $('#game-over').val('false')
  }
}

const checkDraw = function (lengthArray) {
  if (lengthArray === 8 & $('#game-over').val() === 'false') {
    $('#game-over').val('true')
    return console.log('There is a draw!')
  }
}

const gameLogicHandlers = () => {
  $('.new-game').on('submit', resetBoard)
  $('.slot').on('click', gameBoard)
}

module.exports = {
  gameLogicHandlers
}
