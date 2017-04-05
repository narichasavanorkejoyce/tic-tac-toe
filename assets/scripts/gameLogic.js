const checkWin = function (slotValue) {
  if ($('#slot-1').html() !== '' && $('#slot-1').html() === $('#slot-2').html() && $('#slot-1').html() === $('#slot-3').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-1').html() !== '' && $('#slot-1').html() === $('#slot-4').html() && $('#slot-1').html() === $('#slot-7').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-1').html() !== '' && $('#slot-1').html() === $('#slot-5').html() && $('#slot-1').html() === $('#slot-9').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-3').html() !== '' && $('#slot-3').html() === $('#slot-5').html() && $('#slot-3').html() === $('#slot-7').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-2').html() !== '' && $('#slot-5').html() === $('#slot-5').html() && $('#slot-2').html() === $('#slot-8').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-3').html() !== '' && $('#slot-3').html() === $('#slot-6').html() && $('#slot-3').html() === $('#slot-9').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-7').html() !== '' && $('#slot-7').html() === $('#slot-8').html() && $('#slot-7').html() === $('#slot-9').html()) {
    return console.log('You found a match!')
  }

  if ($('#slot-4').html() !== '' && $('#slot-4').html() === $('#slot-5').html() && $('#slot-4').html() === $('#slot-6').html()) {
    return console.log('You found a match!')
  }
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
