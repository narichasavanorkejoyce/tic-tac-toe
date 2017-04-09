const checkWinX = function (object) {
  let winsX = 0
  // Loop through the games object
  for (let i = 0; i < object.length; i++) {
    // Check whether there is a winning combination
    if (object[i].cells[0] === 'X' && object[i].cells[0] === object[i].cells[1] && object[i].cells[0] === object[i].cells[2]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[0] === 'X' && object[i].cells[0] === object[i].cells[3] && object[i].cells[0] === object[i].cells[6]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[0] === 'X' && object[i].cells[0] === object[i].cells[4] && object[i].cells[0] === object[i].cells[8]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[2] === 'X' && object[i].cells[2] === object[i].cells[4] && object[i].cells[2] === object[i].cells[6]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[1] === 'X' && object[i].cells[1] === object[i].cells[4] && object[i].cells[1] === object[i].cells[7]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[2] === 'X' && object[i].cells[2] === object[i].cells[5] && object[i].cells[2] === object[i].cells[8]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[6] === 'X' && object[i].cells[6] === object[i].cells[7] && object[i].cells[6] === object[i].cells[8]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    } else if (object[i].cells[3] === 'X' && object[i].cells[3] === object[i].cells[4] && object[i].cells[3] === object[i].cells[5]) {
      // Add 1 to winsX variable
      winsX = winsX + 1
    }
  }
  // console.log('winsX equals ' + winsX)
  $('#num-x-wins').val(winsX + '/' + object.length)
  return winsX
}

const checkWinO = function (object) {
  let winsO = 0
  // Loop through the games object
  for (let i = 0; i < object.length; i++) {
    // Check whether there is a winning combination
    if (object[i].cells[0] === 'O' && object[i].cells[0] === object[i].cells[1] && object[i].cells[0] === object[i].cells[2]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[0] === 'O' && object[i].cells[0] === object[i].cells[3] && object[i].cells[0] === object[i].cells[6]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[0] === 'O' && object[i].cells[0] === object[i].cells[4] && object[i].cells[0] === object[i].cells[8]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[2] === 'O' && object[i].cells[2] === object[i].cells[4] && object[i].cells[2] === object[i].cells[6]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[1] === 'O' && object[i].cells[1] === object[i].cells[4] && object[i].cells[1] === object[i].cells[7]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[2] === 'O' && object[i].cells[2] === object[i].cells[5] && object[i].cells[2] === object[i].cells[8]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[6] === 'O' && object[i].cells[6] === object[i].cells[7] && object[i].cells[6] === object[i].cells[8]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    } else if (object[i].cells[3] === 'O' && object[i].cells[3] === object[i].cells[4] && object[i].cells[3] === object[i].cells[5]) {
      // Add 1 to winsO variable
      winsO = winsO + 1
    }
  }
  // console.log('winsO equals ' + winsO)
  $('#num-o-wins').val(winsO + '/' + object.length)
  return winsO
}

module.exports = {
  checkWinX,
  checkWinO
}
