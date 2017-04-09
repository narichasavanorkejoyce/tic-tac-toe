// let numMoves = 0
let gameArray = []
let winner = ''
// Define a variable that counts the number of wins
// let winCountX = 0
// let winCountO = 0

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
  // console.log(gameArray)
  $('.game-result').text('')
  $('.slot').on('click', gameBoard)
}

const gameBoard = function (event) {
  const lengthArray = gameArray.filter((e) => e !== undefined).length
  // console.log('the array length is ' + lengthArray)
  // If we're on an even number of moves, place down 'X'
  if ($(this).html() === '' && lengthArray % 2 === 0) {
    // Fill in slot with 'X' - UI
    $(this).html('X')
    // Store the move in an array
    gameArray[+$(this).attr('id')] = 'X'
    // console.log(gameArray)
    // Populate the game form with data about the move.
    // This will be sent up to the back end through a PATCH AJAX request
    // Populate the index input
    $('#game-array-index').val(+$(this).attr('id'))
    // Populate the marker input
    $('#move-marker').val('X')
    // Add 1 to the numMoves counter
    // numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWinX()
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
    // console.log(gameArray)
    // Populate the game form with data about the move.
    // This will be sent up to the back end through a PATCH AJAX request
    // Populate the index input
    $('#game-array-index').val(+$(this).attr('id'))
    // Populate the marker input
    $('#move-marker').val('O')
    // Add 1 to the numMoves counter
    // numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWinO()
    checkDraw(lengthArray)
    // Remove the undefined elements in an array
    // cleanArray(gameArray)
    // console.log(cleanArray)
    // Check whether it's a cat's game
  // } else if (numMoves === 8) {
  //   checkDraw()
  } else if ($(this).html() !== '') {
    // console.log('Please Pick Another Slot')
  }
  // console.log(numMoves)
  $('#game-info').submit()
}

const checkWinX = function () {
  // Check whether there is a winning combination
  if ($('#0').html() === 'X' && $('#0').html() === $('#1').html() && $('#0').html() === $('#2').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else if ($('#0').html() === 'X' && $('#0').html() === $('#3').html() && $('#0').html() === $('#6').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else if ($('#0').html() === 'X' && $('#0').html() === $('#4').html() && $('#0').html() === $('#8').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else if ($('#2').html() === 'X' && $('#2').html() === $('#4').html() && $('#2').html() === $('#6').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else if ($('#1').html() === 'X' && $('#1').html() === $('#4').html() && $('#1').html() === $('#7').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else if ($('#2').html() === 'X' && $('#2').html() === $('#5').html() && $('#2').html() === $('#8').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else if ($('#6').html() === 'X' && $('#6').html() === $('#7').html() && $('#6').html() === $('#8').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#3').html() === 'X' && $('#3').html() === $('#4').html() && $('#3').html() === $('#5').html()) {
    // Assign winner variable to 'X'
    winner = 'X'
    // winCountX = winCountX + 1
    // console.log('winCountX is ' + winCountX)
    // $('.num-x-wins').val(winCountX)
    // Display that player 'X' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return winCountX
    // return console.log('You found a match!')
  } else {
    // Populate the outcome input
    $('#game-over').val('false')
  }
}

const checkWinO = function () {
  // Check whether there is a winning combination
  if ($('#0').html() === 'O' && $('#0').html() === $('#1').html() && $('#0').html() === $('#2').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#0').html() === 'O' && $('#0').html() === $('#3').html() && $('#0').html() === $('#6').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#0').html() === 'O' && $('#0').html() === $('#4').html() && $('#0').html() === $('#8').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#2').html() === 'O' && $('#2').html() === $('#4').html() && $('#2').html() === $('#6').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#1').html() === 'O' && $('#1').html() === $('#4').html() && $('#1').html() === $('#7').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#2').html() === 'O' && $('#2').html() === $('#5').html() && $('#2').html() === $('#8').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#6').html() === 'O' && $('#6').html() === $('#7').html() && $('#6').html() === $('#8').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else if ($('#3').html() === 'O' && $('#3').html() === $('#4').html() && $('#3').html() === $('#5').html()) {
    // Assign winner variable to 'O'
    winner = 'O'
    // winCountO = winCountO + 1
    // console.log('winCountO is ' + winCountO)
    // $('.num-x-wins').val(winCountO)
    // Display that player 'O' Won
    $('.game-result').text('Player ' + winner + ' is the winner!')
    // Populate the outcome input
    $('#game-over').val('true')
    // Turn off ability to click a slot
    $('.slot').off()
    // return console.log('You found a match!')
  } else {
    // Populate the outcome input
    $('#game-over').val('false')
  }
}

const checkDraw = function (lengthArray) {
  if (lengthArray === 8 & $('#game-over').val() === 'false') {
    $('#game-over').val('true')
    $('.game-result').text('Draw!')
    // return console.log('There is a draw!')
  }
}

const gameLogicHandlers = () => {
  $('.new-game').on('submit', resetBoard)
  $('.slot').on('click', gameBoard)
}

module.exports = {
  gameLogicHandlers
}
