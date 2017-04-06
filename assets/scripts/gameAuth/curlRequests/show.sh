#!/bin/bash
# sh assets/scripts/gameAuth/curlRequests/show.sh

# Need to input the ID of the game, not the user!
curl "http://localhost:4741/games/3" \
  --include \
  --request GET \
  --header "Authorization: Token token=BAhJIiVmNjlkZDRhMWVjZWM0NWExY2Y1ZjEzZTliNzUzMjUzZgY6BkVG--38426144104a84bc42d99efdfc7c145dcb9873c0"
# data output from curl doesn't have a trailing newline
echo




# {
#   "game": {
#     "id": 1,
#     "cells": ["o","x","o","x","o","x","o","x","o"],
#     "over": true,
#     "player_x": {
#       "id": 1,
#       "email": "and@and.com"
#     },
#     "player_o": {
#       "id": 3,
#       "email": "dna@dna.com"
#     }
#   }
# }
