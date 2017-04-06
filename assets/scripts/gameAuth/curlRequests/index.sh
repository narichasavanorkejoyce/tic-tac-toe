#!/bin/bash
# sh assets/scripts/gameAuth/curlRequests/index.sh

curl "http://localhost:4741/games" \
  --include \
  --request GET \
  --header "Authorization: Token token=BAhJIiUwMDk2OThiNDJjYWYzMGVjZjVkOTdkZjc2ZWZhOTY5ZQY6BkVG--d68a5450cfea00f3f8c6e6250dfccad4e9bd6afd"

# data output from curl doesn't have a trailing newline
echo
