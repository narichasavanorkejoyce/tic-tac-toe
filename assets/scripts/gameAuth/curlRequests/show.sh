#!/bin/bash
# sh assets/scripts/gameAuth/curlRequests/show.sh

# Need to input the ID of the game, not the user!
curl "http://localhost:4741/games/214" \
  --include \
  --request GET \
  --header "Authorization: Token token=BAhJIiUzMWVhMDdkMDZlZDRmNGI1ZmYxMGI5MzBiNzg4OTEyMAY6BkVG--f665bd21c626fff1c2d23ae20e76475351054559"
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
