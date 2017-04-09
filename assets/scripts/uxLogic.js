const uxLogicHandlers = () => {
  $('#game-info').hide()
  $('#play-tic-tac-toe').hide()

  $('#user-starts-game').on('submit', function () {
    $('#play-tic-tac-toe').show()
    $('#user-logs-in').hide()
  })

  $('#sign-out').on('submit', function () {
    $('#play-tic-tac-toe').hide()
    $('#user-logs-in').show()
    $('#sign-up-email').val('')
    $('#sign-up-password').val('')
    $('#sign-up-confirm').val('')
    $('#sign-in-email').val('')
    $('#sign-in-password').val('')
    $('.login-responses').text('')
  })
  // $('#old-password').hide()
  // $('#new-password').hide()
  // $('#change-pwd').on('submit', function () {
  //   $('#old-password').show()
  //   $('#new-password').show()
  //   $('#change-pwd-inst').text('Please enter a new password. Then, click "Change Password" again.')
  // })
}

module.exports = {
  uxLogicHandlers
}
