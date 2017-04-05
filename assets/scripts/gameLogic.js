const checkWin = function (slotValue) {
  if ($('.gameboard').find('#slot-1').val() !== '' &&
    $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-2').val() &&
    $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-3').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-1').val() !== '' &&
    $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-4').val() &&
    $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-7').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-1').val() !== '' &&
    $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-5').val() &&
    $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-9').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-3').val() !== '' &&
    $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-5').val() &&
    $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-7').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-2').val() !== '' &&
    $('.gameboard').find('#slot-2').val() === $('.gameboard').find('#slot-5').val() &&
    $('.gameboard').find('#slot-2').val() === $('.gameboard').find('#slot-8').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-3').val() !== '' &&
    $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-6').val() &&
    $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-9').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-7').val() !== '' &&
    $('.gameboard').find('#slot-7').val() === $('.gameboard').find('#slot-8').val() &&
    $('.gameboard').find('#slot-7').val() === $('.gameboard').find('#slot-9').val()) {
    console.log('You found a match!')
  }
  if ($('.gameboard').find('#slot-4').val() !== '' &&
    $('.gameboard').find('#slot-4').val() === $('.gameboard').find('#slot-5').val() &&
    $('.gameboard').find('#slot-4').val() === $('.gameboard').find('#slot-6').val()) {
    console.log('You found a match!')
  }
}

const gameBoard = function (event) {
  // Select slots in the game board
  // for (let numMoves = 0; numMoves < 9; numMoves++) {
  let numMoves = 0
  // If we're on an even number of moves, place down '0'
  if (numMoves % 2 === 0) {
    // Fill in slot with 'O'
    $(this).html('X')
    numMoves = numMoves + 1
    return numMoves
    // console.log('the even numbered if statement ran')
    // Check whether this move resulted in a winning combo
    // checkWin('X')
    // If we're on an odd number of moves, place down 'X'
  } else if (numMoves % 2 !== 0) {
    // Fill in slot with 'X'
    $(this).html('O')
    numMoves = numMoves + 1
    return numMoves
    // console.log('the odd numbered if statement ran')
    // Check whether this move resulted in a winning combo
    // checkWin('O')
  }
  console.log(numMoves)
}

const gameLogicHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  $('.slot').on('click', gameBoard)
}

module.exports = {
  gameLogicHandlers
}
