#!/bin/bash
# sh assets/scripts/gameAuth/curlRequests/create.sh

curl "http://localhost:4741/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=BAhJIiVhMGNiOTQ2MDAzYmEzMjk0YzA4ZjJiMzA3OTc5ZjQwNgY6BkVG--cc1919422e6c9548f6c38db71ac66170b8211310"

# data output from curl doesn't have a trailing newline
echo
