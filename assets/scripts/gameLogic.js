const checkWin = function (slotValue) {
  if ($('#slot-1').html() !== '' && $('#slot-1').html() === $('#slot-2').html() && $('#slot-1').html() === $('#slot-3').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-1').html() !== '' && $('#slot-1').html() === $('#slot-4').html() && $('#slot-1').html() === $('#slot-7').)

  // if ($('.gameboard').find('#slot-1').val() !== '' &&
  //   $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-4').val() &&
  //   $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-7').val()) {
  //   console.log('You found a match!')
  // }
  // if ($('.gameboard').find('#slot-1').val() !== '' &&
  //   $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-5').val() &&
  //   $('.gameboard').find('#slot-1').val() === $('.gameboard').find('#slot-9').val()) {
  //   console.log('You found a match!')
  // }
  // if ($('.gameboard').find('#slot-3').val() !== '' &&
  //   $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-5').val() &&
  //   $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-7').val()) {
  //   console.log('You found a match!')
  // }
  // if ($('.gameboard').find('#slot-2').val() !== '' &&
  //   $('.gameboard').find('#slot-2').val() === $('.gameboard').find('#slot-5').val() &&
  //   $('.gameboard').find('#slot-2').val() === $('.gameboard').find('#slot-8').val()) {
  //   console.log('You found a match!')
  // }
  // if ($('.gameboard').find('#slot-3').val() !== '' &&
  //   $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-6').val() &&
  //   $('.gameboard').find('#slot-3').val() === $('.gameboard').find('#slot-9').val()) {
  //   console.log('You found a match!')
  // }
  // if ($('.gameboard').find('#slot-7').val() !== '' &&
  //   $('.gameboard').find('#slot-7').val() === $('.gameboard').find('#slot-8').val() &&
  //   $('.gameboard').find('#slot-7').val() === $('.gameboard').find('#slot-9').val()) {
  //   console.log('You found a match!')
  // }
  // if ($('.gameboard').find('#slot-4').val() !== '' &&
  //   $('.gameboard').find('#slot-4').val() === $('.gameboard').find('#slot-5').val() &&
  //   $('.gameboard').find('#slot-4').val() === $('.gameboard').find('#slot-6').val()) {
  //   console.log('You found a match!')
  // )
}

let numMoves = 0

const gameBoard = function (event) {
  // If we're on an even number of moves, place down '0'
  if (numMoves % 2 === 0) {
    // Fill in slot with 'X'
    $(this).html('X')
    // Add 1 to the numMoves counter
    numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWin('X')
    // If we're on an odd number of moves, place down 'X'
  } else if (numMoves % 2 !== 0) {
    // Fill in slot with 'O'
    $(this).html('O')
    // Add 1 to the numMoves counter
    numMoves = numMoves + 1
    // Check whether this move resulted in a winning combo
    checkWin('O')
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
