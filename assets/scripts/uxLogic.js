const uxLogicHandlers = () => {
  $('#game-info').hide()
  $('#play-tic-tac-toe').hide()

  $('#user-starts-game').on('submit', function () {
    $('#play-tic-tac-toe').show()
    $('#user-logs-in').hide()
    $('#old-password').hide().val('')
    $('#new-password').hide().val('')
    $('#submit-change-pwd').hide()
    $('#num-games-completed').val('')
    $('#num-x-wins').val('')
    $('#num-o-wins').val('')
  })

  $('#sign-out').on('submit', function () {
    $('#play-tic-tac-toe').hide()
    $('#user-logs-in').show()
    $('#sign-up-email').val('')
    $('#sign-up-password').val('')
    $('#sign-up-confirm').val('')
    $('#sign-in-email').val('')
    $('#sign-in-password').val('')
    $('.auth-responses').text('')
  })

  $('#change-pwd').on('click', function () {
    $('#old-password').show()
    $('#new-password').show()
    $('#submit-change-pwd').show()
  })
}

module.exports = {
  uxLogicHandlers
}
