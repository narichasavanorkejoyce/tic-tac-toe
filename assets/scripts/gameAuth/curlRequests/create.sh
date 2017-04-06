#!/bin/bash
# sh assets/scripts/gameAuth/curlRequests/create.sh

curl "http://localhost:4741/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=BAhJIiVmNjlkZDRhMWVjZWM0NWExY2Y1ZjEzZTliNzUzMjUzZgY6BkVG--38426144104a84bc42d99efdfc7c145dcb9873c0"

# data output from curl doesn't have a trailing newline
echo
