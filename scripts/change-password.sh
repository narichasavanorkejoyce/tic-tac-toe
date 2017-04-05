#!/bin/bash

#ID=10 EMAIL=lm0202 OLDPW=test2 NEWPW=test20 TOKEN=BAhJIiVmNGI0MmYzMzI2ZDNkZTYwNzUyZjRlMTc1MTgwNDNjZgY6BkVG--ad08134f2e8675073669099ef333a87f47e0613c scripts/change-password.sh
  API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/change-password/10"
  curl --include --request PATCH "${API}${URL_PATH}" \
    --header "Authorization: Token token=BAhJIiUwY2RkZTQ1ZDY4YmE0ZDliMzdlNDM0ODc4MDA4N2MxOAY6BkVG--66665413ae3998b4a6e2e273a00b6736562bb6d2" \
    --header "Content-Type: application/json" \
    --data '{
      "passwords": {
        "old": "test2",
        "new": "test20"
      }
    }'

# data output from curl doesn't have a trailing newline
echo
